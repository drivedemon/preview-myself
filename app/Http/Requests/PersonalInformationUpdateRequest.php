<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PersonalInformationUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'nick_name' => ['required', 'string'],
            'job_position' => ['required', 'string'],
            'github_url' => ['required', 'string'],
            'mobile_phone' => ['required', 'integer'],
            'email' => ['required', 'string'],
            'description' => ['required', 'string'],
        ];
    }
}