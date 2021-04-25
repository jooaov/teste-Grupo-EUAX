<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjetosModels;

class Projetos extends Controller {
    function create(Request $request) {
        $projetos = new ProjetosModels;
        $projetos->nome_do_projeto = $request->nome;
        $projetos->data_inicio = $request->data_inicio;
        $projetos->data_fim = $request->data_fim;
        // $projetos->atividade()->sync([$request->atividade]);
        $projetos->save();
        return $projetos;
    }

    function readAll() {
        return json_encode(ProjetosModels::all());
    }

    function read($id) {
        $projetos = ProjetosModels::find($id);
        return $projetos;
    }

    function update($id,Request $request) {
        $projetos = ProjetosModels::find($id);

        if ($request->nome) {
            $projetos->nome_do_projeto = $request->nome;
        }

        if ($request->data_inicio) {
            $projetos->data_inicio = $request->data_inicio;
        }

        if ($request->data_fim) {
            $projetos->data_fim = $request->data_fim;
        }

        $projetos->save();
        return $projetos;
    }

    function delete($id) {
        $user = ProjetosModels::find($id);
        $user->delete();
    }
}