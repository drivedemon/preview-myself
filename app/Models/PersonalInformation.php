<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'nick_name',
        'job_position',
        'github_url',
        'mobile_phone',
        'email',
        'description',
        'image_path',
    ];
}
