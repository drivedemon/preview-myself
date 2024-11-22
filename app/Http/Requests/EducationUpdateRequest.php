<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EducationUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'string'],
            'university_name' => ['required', 'string'],
            'grade' => ['required', 'string'],
            'start_year' => ['required', 'string'],
            'end_year' => ['required', 'string'],
            'faculty_name' => ['required', 'string'],
            'major_name' => ['required', 'string'],
        ];
    }
}
