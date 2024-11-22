<?php

namespace App\Domain\Skill;

use App\Models\Skill;

class SkillRepository
{
    private Skill $skill;

    public function __construct(Skill $skill)
    {
        $this->skill = $skill;
    }

    public function firstOrFail(?int $id = null): Skill
    {
        $builder = $this->skill->query();

        if ($id !== null) {
            $builder->where('id', $id);
        }

        return $this->skill->firstOrFail();
    }

    public function updateById(string $id, SkillDTO $dto): Skill
    {
        $skill = $this->firstOrFail($id);
        $skill->update($dto->toArray());

        return $skill;
    }
}
