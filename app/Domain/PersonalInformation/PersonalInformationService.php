<?php

namespace App\Domain\PersonalInformation;

use App\Models\PersonalInformation;

class PersonalInformationService
{
    private PersonalInformationRepository $personalInformationRepository;

    public function __construct(PersonalInformationRepository $personalInformationRepository)
    {
        $this->personalInformationRepository = $personalInformationRepository;
    }

    public function get(): PersonalInformation
    {
        return $this->personalInformationRepository->firstOrFail();
    }

    public function updateById(int $id, PersonalInformationDTO $dto): PersonalInformation
    {
        return $this->personalInformationRepository->updateById($id, $dto);
    }
}
