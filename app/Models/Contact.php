<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contact';
    protected $fillable = [
        'name',
        'email',
    ];

    public function phones()
    {
        return $this->hasMany(ContactPhone::class, 'contact_id', 'id');
    }

    public function addresses()
    {
        return $this->hasMany(ContactAddress::class, 'contact_id', 'id');
    }
}
