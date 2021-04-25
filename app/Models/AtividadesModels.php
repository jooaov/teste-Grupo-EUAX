<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AtividadesModels extends Model {
    use HasFactory;
    protected $table = 'Atividades';
    public $timestamps = false;

    public function projeto() {
        return $this->belongsTo(ProjetosModels::class,'id','id');
    }
}
