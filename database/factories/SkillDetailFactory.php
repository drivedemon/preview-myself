<?php

namespace Database\Factories;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;

class SkillDetailFactory extends Factory
{
    public function definition(): array
    {
        return [
            'skill_id' => Skill::first() ?? Skill::factory()->create()->id,
            'name' => 'PHP (Laravel)',
            'level' => 'Expert',
        ];
    }
}
