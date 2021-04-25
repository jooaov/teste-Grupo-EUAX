<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjetosModels extends Model {
    use HasFactory;
    protected $table = 'Projetos';
    public $timestamps = false;

    public function atividade() {
        return $this->hasMany(AtividadesModels::class,'ID_Projeto', 'id');
        // return $this->hasMany(AtividadesModels::class,'id', 'ID_Projeto');
    }
}
