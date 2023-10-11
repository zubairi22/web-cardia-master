<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class VitalSign extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'heart_rate',
        'user_id',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','user_id');
    }
}
