<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        $personalInformation = PersonalInformation::first();

        return Inertia::render('Skill', [
            'personalInformation' => $personalInformation,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
