<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class WorkExperienceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'company_name' => fake()->company,
            'job_position' => 'Developer',
            'start_date' => now()->subYears(4),
            'end_date' => now(),
            'project_name' => 'Random Project',
            'description' => 'Random Description',
        ];
    }
}
