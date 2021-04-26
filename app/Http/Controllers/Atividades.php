<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AtividadesModels;
use App\Models\ProjetosModels;
use function PHPUnit\Framework\isNull;

class Atividades extends Controller {
    function create(Request $request) {
        if ($this->verificarDatas($request->data_inicio,$request->data_fim)) {
            return response('Datas invalidas', 400);
        }
        if (
            !isset($request->nome) ||
            !isset($request->finalizado) ||
            !isset($request->data_inicio) ||
            !isset($request->data_fim) ||
            !isset($request->projetos_id) ||
            !isset($request->descrição)
            ) {
            return response('Dados incompletos', 400);
        }
        $atividades = new AtividadesModels;
        $atividades->nome_da_atividade = $request->nome;
        $atividades->finalizado = $request->finalizado;
        $atividades->data_inicio = $request->data_inicio;
        $atividades->data_fim = $request->data_fim;
        $atividades->ID_Projeto = (int)$request->projetos_id;
        $atividades->descrição = $request->descrição;
        $atividades->save();
        return $atividades;
    }

    private function verificarDatas($dataInical,$dataFinal) {
        try {
            $data1 = new \DateTime( $dataInical );
            $data2 = new \DateTime( $dataFinal );
            return ($data1 >= $data2);
        } catch (\Exception $th) {
            return response('Datas invalidas', 400);
        }
    }

    function readAll() {
        return response(json_encode(AtividadesModels::all()), 200);
    }

    function read($id) {
        $atividades = AtividadesModels::find($id);
        if ($atividades) {
            return response($atividades, 200);
        } else {
            return response('Atividade não encontrada', 404);
        }
    }

    function readFromProject($id) {
        $atividades = AtividadesModels::where('ID_Projeto',$id)->get();
        if ($atividades) {
            return response($atividades, 200);
        } else {
            return response('Não encontrado projetos dessa atividade', 404);
        }
    }

    function update($id,Request $request) {
        $atividades = AtividadesModels::find($id);
        if ($atividades) {
            if ($this->verificarDatas($request->data_inicio,$request->data_fim)) {
                return response('Datas invalidas', 400);
            }
            if (isset($request->nome)) {
                $atividades->nome_da_atividade = $request->nome;
            }
            if (isset($request->finalizado)) {
                $atividades->finalizado = $request->finalizado;
            }
            if (isset($request->data_inicio)) {
                $atividades->data_inicio = $request->data_inicio;
            }
            if (isset($request->data_fim)) {
                $atividades->data_fim = $request->data_fim;
            }
            if (isset($request->descrição)) {
                $atividades->descrição = $request->descrição;
            }
            $atividades->save();

            //marca como finalizado ou não dependendo das atividades finalizadas
            $atividadesNaoFinalizadas = AtividadesModels::where('ID_Projeto',$atividades->ID_Projeto)->where('finalizado', '=', 0)->count();
            if ($atividadesNaoFinalizadas == 0) {
                $projeto = ProjetosModels::find($atividades->ID_Projeto);
                $projeto->finalizada = 1;
                $projeto->save();
            } elseif (isset($request->finalizado) && $request->finalizado == 0) {
                $projeto = ProjetosModels::find($atividades->ID_Projeto);
                $projeto->finalizada = 0;
                $projeto->save();
            }
            //fim marca como finalizado ou não dependendo das atividades finalizadas

            return response($atividades, 200);
        } else {
            return response('Atividade não encontrada', 404);
        }
    }

    function delete($id) {
        $atividade = AtividadesModels::find($id);
        if ($atividade) {
            $atividade->delete();
            return response('', 204);
        } else {
            return response('Atividade não encontrada', 404);
        }
    }
}
