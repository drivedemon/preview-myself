<?php

namespace App\Domain\Skill;

use Illuminate\Database\Eloquent\Collection;

class SkillService
{
    private SkillRepository $skillRepository;

    public function __construct(SkillRepository $skillRepository)
    {
        $this->skillRepository = $skillRepository;
    }

    public function get(): Collection
    {
        return $this->skillRepository->get();
    }

    public function update(array $data): void
    {
        foreach ($data as $skillData) {
            $skill = $this->skillRepository->updateById($skillData['id'], $skillData);

            foreach ($skillData['skill_details'] as $skillDetailData) {
                $skill->skillDetails()->where('skill_id', $skillDetailData['id'])->update($skillDetailData);
            }
        }
    }
}
