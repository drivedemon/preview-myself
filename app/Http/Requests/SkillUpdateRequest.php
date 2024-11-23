<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SkillUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'data' => ['required', 'array'],
            'data.*.id' => ['required', 'integer', 'exists:skills,id'],
            'data.*.title' => ['required', 'string'],
            'data.*.skill_details' => ['required', 'array'],
            'data.*.skill_details.*.id' => ['required', 'integer', 'exists:skill_details,id'],
            'data.*.skill_details.*.name' => ['required', 'string'],
            'data.*.skill_details.*.level' => ['required', 'string'],
        ];
    }
}
