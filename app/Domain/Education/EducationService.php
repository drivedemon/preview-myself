<?php

namespace App\Domain\Education;

use App\Models\Education;

class EducationService
{
    private EducationRepository $educationRepository;

    public function __construct(EducationRepository $educationRepository)
    {
        $this->educationRepository = $educationRepository;
    }

    public function get(): Education
    {
        return $this->educationRepository->firstOrFail();
    }

    public function updateById(int $id, EducationDTO $dto): Education
    {
        return $this->educationRepository->updateById($id, $dto);
    }
}
