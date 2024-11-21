<?php

namespace App\Http\Controllers;

use App\Domain\PersonalInformation\PersonalInformationDTO;
use App\Domain\PersonalInformation\PersonalInformationService;
use App\Http\Requests\PersonalInformationUpdateRequest;
use Inertia\Inertia;

class PersonalInformationController extends Controller
{
    private PersonalInformationService $personalInformationService;

    public function __construct(PersonalInformationService $personalInformationService)
    {
        $this->personalInformationService = $personalInformationService;
    }

    public function index()
    {
        $imagePath = asset('storage/dog-meme.jpg');

        return Inertia::render('PersonalInformation', [
            'imageUrl' => $imagePath,
            'personalInformation' => $this->personalInformationService->get(),
        ]);
    }

    public function update(PersonalInformationUpdateRequest $request)
    {
        $data = $request->validated();
        $path = $request->file('image')->store('images', 'public');
        $data['image_path'] = $path;
        $dto = new PersonalInformationDTO($data);

        return Inertia::render('PersonalInformation', [
            'personalInformation' => $this->personalInformationService->get(),
        ]);
    }
}
