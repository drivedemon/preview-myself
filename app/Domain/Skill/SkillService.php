<?php

namespace App\Domain\Skill;

use App\Models\Skill;

class SkillService
{
    private SkillRepository $skillRepository;

    public function __construct(SkillRepository $skillRepository)
    {
        $this->skillRepository = $skillRepository;
    }

    public function get(): Skill
    {
        return $this->skillRepository->firstOrFail();
    }

    public function updateById(int $id, SkillDTO $dto): Skill
    {
        return $this->skillRepository->updateById($id, $dto);
    }
}
