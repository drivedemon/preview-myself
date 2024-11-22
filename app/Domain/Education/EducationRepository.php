<?php

namespace App\Domain\Education;

use App\Models\Education;

class EducationRepository
{
    private Education $education;

    public function __construct(Education $education)
    {
        $this->education = $education;
    }

    public function firstOrFail(?int $id = null): Education
    {
        $builder = $this->education->query();

        if ($id !== null) {
            $builder->where('id', $id);
        }

        return $this->education->firstOrFail();
    }

    public function updateById(string $id, EducationDTO $dto): Education
    {
        $education = $this->firstOrFail($id);
        $education->update($dto->toArray());

        return $education;
    }
}
