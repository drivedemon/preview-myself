<?php

namespace App\Domain\PersonalInformation;

use App\Models\PersonalInformation;

class PersonalInformationService
{
    private PersonalInformationRepository $userRepository;

    public function __construct(PersonalInformationRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function get(): PersonalInformation
    {
        return $this->userRepository->firstOrFail();
    }

    public function updateById(int $id, PersonalInformationDTO $dto): PersonalInformation
    {
        return $this->userRepository->updateById($id, $dto);
    }
}
