<?php

namespace App\Domain\Skill;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Collection;

class SkillRepository
{
    private Skill $skill;

    public function __construct(Skill $skill)
    {
        $this->skill = $skill;
    }

    public function get(): Collection
    {
        return $this->skill->with(['skillDetails'])->get();
    }

    public function findOrFail(int $id): Skill
    {
        return $this->skill->findOrFail($id);
    }

    public function updateById(int $id, array $data): Skill
    {
        $skill = $this->findOrFail($id);
        $skill->update($data);

        return $skill;
    }
}
