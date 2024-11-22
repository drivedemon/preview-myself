<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EducationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'university_name' => 'university',
            'grade' => 4.00,
            'start_year' => now()->years(-4),
            'end_year' => now()->year,
            'faculty_name' => 'science and technology',
            'major_name' => 'information technology',
        ];
    }
}
