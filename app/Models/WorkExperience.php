<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'job_position',
        'start_date',
        'end_date',
        'project_name',
        'description',
    ];
}
