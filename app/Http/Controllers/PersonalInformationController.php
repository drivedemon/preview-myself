<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Inertia\Inertia;

class PersonalInformationController extends Controller
{
    public function index()
    {
        $personalInformation = PersonalInformation::first();

        return Inertia::render('PersonalInformation', [
            'personalInformation' => $personalInformation,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
