<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Inertia\Inertia;

class WorkExperienceController extends Controller
{
    public function index()
    {
        $personalInformation = PersonalInformation::first();

        return Inertia::render('WorkExperience', [
            'personalInformation' => $personalInformation,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
