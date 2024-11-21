<?php

namespace App\Domain\PersonalInformation;

use App\Domain\DTO;

class PersonalInformationDTO extends DTO
{
    protected $firstName;
    protected $lastName;
    protected $nickName;
    protected $jobPosition;
    protected $githubUrl;
    protected $mobilePhone;
    protected $email;
    protected $description;
    protected $imagePath;
}
