<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Inertia\Inertia;

class EducationController extends Controller
{
    public function index()
    {
        $personalInformation = PersonalInformation::first();

        return Inertia::render('Education', [
            'personalInformation' => $personalInformation,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
