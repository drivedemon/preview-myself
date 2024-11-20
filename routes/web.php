<?php

use App\Http\Controllers\EducationController;
use App\Http\Controllers\PersonalInformationController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\WorkExperienceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

Route::redirect('/', '/personal-information');

Route::get('/personal-information', [PersonalInformationController::class, 'index'])->name('personal_information');
Route::get('/education', [EducationController::class, 'index'])->name('education');
Route::get('/skill', [SkillController::class, 'index'])->name('skill');
Route::get('/work-experience', [WorkExperienceController::class, 'index'])->name('work_experience');

