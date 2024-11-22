<?php

namespace App\Models;

use App\Enums\SkillInformationLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'skill_id',
        'name',
        'level',
    ];

    protected $casts = [
        'level' => SkillInformationLevel::class,
    ];
}
