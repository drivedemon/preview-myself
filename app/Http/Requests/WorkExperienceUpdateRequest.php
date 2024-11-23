<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkExperienceUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'data' => ['required', 'array'],
            'data.*.id' => ['required', 'integer', 'exists:work_experiences,id'],
            'data.*.company_name' => ['required', 'string'],
            'data.*.job_position' => ['required', 'string'],
            'data.*.start_date' => ['required', 'string', 'date_format:Y-m-d'],
            'data.*.end_date' => ['required', 'string', 'date_format:Y-m-d'],
            'data.*.project_name' => ['required', 'string'],
            'data.*.description' => ['required', 'string'],
        ];
    }
}
