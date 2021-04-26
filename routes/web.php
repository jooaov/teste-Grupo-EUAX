<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Projetos;
use App\Http\Controllers\Atividades;
use App\Http\Controllers\SPAController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// projetos
// leitura todas
Route::get('/api/projetos',[Projetos::class, 'readAll']);
//leitura
Route::get('/api/projetos/{id}',[Projetos::class, 'read']);
//criar
Route::post('/api/projetos',[Projetos::class, 'create']);
//excluir
Route::delete('/api/projetos/{id}', [Projetos::class, 'delete']);
//atualizações
Route::put('/api/projetos/{id}',[Projetos::class, 'update']);
//finalizar projeto/atividades
Route::put('/api/projetos/finalizar/{id}',[Projetos::class, 'finish']);
//fim projetos

//Atividades
//leitura todas
Route::get('/api/atividades',[Atividades::class, 'readAll']);
//leitura
Route::get('/api/atividades/{id}',[Atividades::class, 'read']);

Route::get('/api/atividades/projeto/{id}',[Atividades::class, 'readFromProject']);

//criar
Route::post('/api/atividades',[Atividades::class, 'create']);
//excluir
Route::delete('/api/atividades/{id}', [Atividades::class, 'delete']);
//atualizações
Route::put('/api/atividades/{id}',[Atividades::class, 'update']);

//fim projetos

//rotas quasar
Route::get('/',function() {
    return view ( 'app' );
});

Route::get('/informacoes',function() {
    return view ( 'app' );
});

Route::get('/informacoes/{id}',function() {
    return view ( 'app' );
});
//fim rotas quasar
