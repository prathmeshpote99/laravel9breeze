<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Newuser extends Model implements AuthenticatableContract
{
    use HasFactory, Authenticatable;

    protected $fillable = [
        'first_name',
        'last_name',
        'password',
        'email',
        'age'
    ];

    protected $hidden = [
        'password'
    ];
}
