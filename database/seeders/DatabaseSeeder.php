<?php

namespace Database\Seeders;

use App\Models\PersonalInformation;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        PersonalInformation::factory()->create([
            'first_name' => 'Sirakan',
            'last_name' => 'Kaewgosa',
            'nick_name' => 'Drive',
            'job_position' => 'Developer',
            'github_url' => 'https://www.github.com/drive',
            'mobile_phone' => '0625490000',
            'email' => 'drive@mail.com',
            'description' => 'I am DRIVE!',
        ]);
    }
}
