<?php

namespace App\Domain\WorkExperience;

use App\Models\WorkExperience;
use Illuminate\Database\Eloquent\Collection;

class WorkExperienceRepository
{
    private WorkExperience $workExperience;

    public function __construct(WorkExperience $workExperience)
    {
        $this->workExperience = $workExperience;
    }

    public function get(): Collection
    {
        return $this->workExperience->orderBy('id', 'DESC')->get();
    }

    public function findOrFail(int $id): WorkExperience
    {
        return $this->workExperience->findOrFail($id);
    }

    public function updateById(string $id, array $data): WorkExperience
    {
        $workExperience = $this->findOrFail($id);
        $workExperience->update($data);

        return $workExperience;
    }
}
