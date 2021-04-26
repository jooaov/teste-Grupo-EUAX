<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjetosModels;
use App\Models\AtividadesModels;

class Projetos extends Controller {
    function create(Request $request) {
        if ($this->verificarDatas($request->data_inicio,$request->data_fim)) {
            return response('Datas invalidas', 400);
        }
        if (
            !isset($request->nome) ||
            !isset($request->data_inicio) ||
            !isset($request->data_fim) ||
            !isset($request->descrição)
            ) {
            return response('Dados incompletos', 400);
        }
        $projetos = new ProjetosModels;
        $projetos->nome_do_projeto = $request->nome;
        $projetos->data_inicio = $request->data_inicio;
        $projetos->data_fim = $request->data_fim;
        $projetos->descrição = $request->descrição;
        $projetos->save();
        return response($projetos, 200);
    }

    function finish($id) {
        $projeto = ProjetosModels::find($id);
        $quantidadesAtividades = AtividadesModels::where('ID_Projeto',$projeto->id)->count();
        if ($quantidadesAtividades > 0) {
            AtividadesModels::where('ID_Projeto',$projeto->id)->update(['finalizado' => 1]);
            $projeto->finalizada = 1;
            $projeto->save();
            return response('Finalizado', 200);
        } else {
            return response('É preciso atividades para finalizar o projeto', 400);
        }
    }

    private function calcularPorcentagem ($atividadesFinalizadas,$atividadesFinaNaolizadas) {
        $total = $atividadesFinalizadas + $atividadesFinaNaolizadas;
        if ($total != 0) {
            $porcentagem = ($atividadesFinalizadas * 100) / $total;
            return round($porcentagem,2);
        } else {
            return 0;
        }
    }

    private function projetoAtrasado ($projeto) {
        $dataMaior = date($projeto->atividade->max('data_fim'));
        $dataFinalProjeto = date($projeto->data_fim);
        return ($dataMaior > $dataFinalProjeto);
    }

    function readAll() {
        $projetosFinalizadas = 0;
        $projetosNaoFinalizadas = 0;
        foreach ($projetos = ProjetosModels::all() as &$projeto) {
            //calculando porcentagem atividade
            $atividadesFinalizadas = 0;
            $atividadesNaoFinalizadas = 0;
            $projeto->porcentagem = 0;
            foreach ($projeto->atividade as  $value) {
                if ($value->finalizado === 1) {
                    $atividadesFinalizadas++;
                    $projetosFinalizadas++;
                } else {
                    $atividadesNaoFinalizadas++;
                    $projetosNaoFinalizadas++;
                }
            }
            $projeto->porcentagem = $this->calcularPorcentagem($atividadesFinalizadas,$atividadesNaoFinalizadas);
            //fim calculando porcentagem atividade

            //veficar se o projeto esta atrazado
            $projeto->projetoAtrasado = $this->projetoAtrasado($projeto);
            //fimveficar se o projeto esta atrazado
        }

        //calculando porcetagem dos projetos
        // return [$projetosFinalizadas, $projetosNaoFinalizadas];
        if (count($projetos) !== 0) {
            $projetos[] = $this->calcularPorcentagem($projetosFinalizadas,$projetosNaoFinalizadas);
        }
        //fim calculando porcetagem dos projetos
        return response(json_encode($projetos), 200);
    }

    function read($id) {
        $projetos = ProjetosModels::find($id);
        if ($projetos) {
            return response($projetos, 200);
        } else {
            return response('Projeto não encontrado', 404);
        }
    }

    function update($id,Request $request) {
        $projetos = ProjetosModels::find($id);
        if ($projetos) {
            if ($this->verificarDatas($request->data_inicio,$request->data_fim)) {
                return response('Datas invalidas', 400);
            }
            if (isset($request->nome)) {
                $projetos->nome_do_projeto = $request->nome;
            }

            if (isset($request->data_inicio)) {
                $projetos->data_inicio = $request->data_inicio;
            }

            if (isset($request->data_fim)) {
                $projetos->data_fim = $request->data_fim;
            }
            if (isset($request->descrição)) {
                $projetos->descrição = $request->descrição;
            }
            $projetos->save();
            return response($projetos, 200);
        } else {
            return response('Projeto não encontrado', 404);
        }
    }

    function delete($id) {
        $projeto = ProjetosModels::find($id);
        if ($projeto) {
            AtividadesModels::where('ID_Projeto',$projeto->id)->delete();
            $projeto->delete();
            return response('', 204);
        } else {
            return response('Projeto não encontrado', 404);
        }
    }

    private function verificarDatas($dataInical,$dataFinal) {
        try {
            $data1 = new \DateTime( $dataInical );
            $data2 = new \DateTime( $dataFinal );
            return ($data1 >= $data2);
        } catch (\Exception $e) {
            return response('Datas invalidas', 400);
        }
    }
}