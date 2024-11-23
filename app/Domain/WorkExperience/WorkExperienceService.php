<?php

namespace App\Domain\WorkExperience;

use Illuminate\Database\Eloquent\Collection;

class WorkExperienceService
{
    private WorkExperienceRepository $workExperienceRepository;

    public function __construct(WorkExperienceRepository $workExperienceRepository)
    {
        $this->workExperienceRepository = $workExperienceRepository;
    }

    public function get(): Collection
    {
        return $this->workExperienceRepository->get();
    }

    public function update(array $data): void
    {
        foreach ($data as $workExperience) {
            $this->workExperienceRepository->updateById($workExperience['id'], $workExperience);
        }
    }
}
