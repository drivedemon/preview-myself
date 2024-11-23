<?php

namespace Database\Seeders;

use App\Models\Education;
use App\Models\PersonalInformation;
use App\Models\Skill;
use App\Models\SkillDetail;
use App\Models\WorkExperience;
use Carbon\Carbon;
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

        Education::factory()->create([
            'university_name' => 'Rattanabundit University',
            'grade' => 3.11,
            'start_year' => 2013,
            'end_year' => 2017,
            'faculty_name' => 'Science and Technology',
            'major_name' => 'Information Technology',
        ]);

        $skills = [
            'Languages' => [
                ['name' => 'PHP (Laravel)', 'level' => 'Expert'],
                ['name' => 'Ruby on Rails', 'level' => 'Familiar'],
                ['name' => 'NodeJs', 'level' => 'Basic'],
                ['name' => 'SQL / ORM', 'level' => 'Advance'],
                ['name' => 'VueJs / NuxtJs', 'level' => 'Advance'],
                ['name' => 'React / NextJs', 'level' => 'intermediate'],
            ],
            'System & Server' => [
                ['name' => 'Apache / Linux / Nginx', 'level' => 'Familiar'],
                ['name' => 'Docker / AWS', 'level' => 'Basic'],
            ],
            'Database' => [
                ['name' => 'MySQL', 'level' => 'Advance'],
                ['name' => 'Oracle | Postgres', 'level' => 'Basic'],
            ],
            'English' => [
                ['name' => ' Read / Write / Speak', 'level' => 'Familiar'],
            ],
        ];

        foreach ($skills as $title => $details) {
            $skill = Skill::factory()->create(['title' => $title]);
            foreach ($details as $detail) {
                SkillDetail::factory()->create(['skill_id' => $skill->id, ...$detail]);
            }
        }

        $workExperiences = [
            [
                'company_name' => 'VP Advance',
                'job_position' => 'Software Developer',
                'start_date' => Carbon::create(2018, 1, 1),
                'end_date' => Carbon::create(2019, 12, 31),
                'project_name' => 'Single Window / E-Service',
                'description' => 'Design and development web-app with PHP and Jquery. Develop backend for support requirement SA with PL/SQL. Develop window-application connect smartcard reader with VB & C#',
            ],
            [
                'company_name' => 'CDG Group',
                'job_position' => 'Application Developer',
                'start_date' => Carbon::create(2019, 1, 1),
                'end_date' => Carbon::create(2019, 12, 1),
                'project_name' => 'DJOP Intranet',
                'description' => 'Maintenance web-application support additional requirement with PHP. Design and develop internal web-application from Cus. with Laravel. Manage and config apache host on CentOS7',
            ],
            [
                'company_name' => 'Morphosis App',
                'job_position' => 'Software Engineer',
                'start_date' => Carbon::create(2019, 1, 1),
                'end_date' => Carbon::create(2021, 2, 28),
                'project_name' => 'CVK / CURAPROX / SAVER',
                'description' => 'Backend restful and docker develop on Back-Office with Laravel. Backend restful and integrate Vipps / Stripe API with Ruby. Backend Graphql endpoints with Ruby. Back-office system with Ruby slim. Setup storage and direct upload on AWS S3',
            ],
            [
                'company_name' => 'PeerPower',
                'job_position' => 'Software Engineer',
                'start_date' => Carbon::create(2021, 2, 28),
                'end_date' => Carbon::create(2021, 12, 31),
                'project_name' => 'PeerpowerPlatform',
                'description' => 'Backend development with Laravel. Frontend development with VueJS. Integrate Docker development for Xdebug',
            ],
            [
                'company_name' => 'MyWaWa',
                'job_position' => 'Fullstack Developer',
                'start_date' => Carbon::create(2022, 1, 1),
                'end_date' => Carbon::create(2023, 8, 31),
                'project_name' => 'Mywawa',
                'description' => 'Backend development with Laravel. Frontend development with VueJS / NuxtJs. Maintenance and Fix defect each project',
            ],
            [
                'company_name' => 'Pacific Prime TH',
                'job_position' => 'Fullstack Developer',
                'start_date' => Carbon::create(2022, 8, 31),
                'end_date' => now(),
                'project_name' => 'PacificPrime',
                'description' => 'Backend development with Laravel. Frontend development with Jquery / VueJS / NextJs. Optimize and Improve team with code standards and design patterns and architectures (SOLID / DDD / TDD / DTO). Start reviewing the code and simplifying the workflow process for the Dev teams quality. Simplify Gitflow to create multiple environments to support the QA team. Setup Github Action CI/CD connect with Plesk server',
            ],
        ];

        foreach ($workExperiences as $workExperience) {
            WorkExperience::factory()->create($workExperience);
        }
    }
}
