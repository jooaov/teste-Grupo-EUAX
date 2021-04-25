<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AtividadesModels;
use App\Models\ProjetosModels;

class Atividades extends Controller {
    function create(Request $request) {
        $atividades = new AtividadesModels;
        $atividades->nome_da_atividade = $request->nome;
        $atividades->finalizada = $request->finalizada;
        $atividades->data_inicio = $request->data_inicio;
        $atividades->data_fim = $request->data_fim;
        $atividades->ID_Projeto = (int)$request->projetos_id;
        $atividades->save();
        return $atividades;
    }

    function readAll() {
        return response(json_encode(AtividadesModels::all()), 200);
    }

    function read($id) {
        $atividades = AtividadesModels::find($id);
        if ($atividades) {
            return $atividades;
            return response($atividades, 200);
        } else {
            return response('', 404);
        }
    }

    function update($id,Request $request) {
        $atividades = AtividadesModels::find($id);

        if ($atividades) {
            if ($request->nome) {
                $atividades->nome_da_atividade = $request->nome;
            }
            if ($request->finalizada) {
                $atividades->finalizada = $request->finalizada;
            }
            if ($request->data_inicio) {
                $atividades->data_inicio = $request->data_inicio;
            }
            if ($request->data_fim) {
                $atividades->data_fim = $request->data_fim;
            }
            if ($request->projetos_id) {
                $atividades->ID_Projeto = (int)$request->projetos_id;
            }
            $atividades->save();
            return response($atividades, 200);
        } else {
            return response('Atividade não encontrada', 404);
        }
    }

    function delete($id) {
        $user = AtividadesModels::find($id);
        if ($user) {
            $user->delete();
            return response('', 200);
        } else {
            return response('Atividade não encontrada', 404);
        }
    }
}
