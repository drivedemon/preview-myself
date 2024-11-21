<?php

namespace App\Domain\PersonalInformation;

use App\Models\PersonalInformation;

class PersonalInformationRepository
{
    private PersonalInformation $personalInformation;

    public function __construct(PersonalInformation $personalInformation)
    {
        $this->personalInformation = $personalInformation;
    }

    public function firstOrFail(?int $id = null): PersonalInformation
    {
        $builder = $this->personalInformation->query();

        if ($id !== null) {
            $builder->where('id', $id);
        }

        return $this->personalInformation->firstOrFail();
    }

    public function updateById(string $id, PersonalInformationDTO $dto): PersonalInformation
    {
        $personalInformation = $this->firstOrFail($id);
        $personalInformation->update($dto->toArray());

        return $personalInformation;
    }
}
