<?php

namespace App\Http\Controllers;

use App\Domain\PersonalInformation\PersonalInformationDTO;
use App\Domain\PersonalInformation\PersonalInformationService;
use App\Http\Requests\PersonalInformationUpdateRequest;
use Inertia\Inertia;
use Inertia\Response;

class PersonalInformationController extends Controller
{
    private PersonalInformationService $personalInformationService;

    public function __construct(PersonalInformationService $personalInformationService)
    {
        $this->personalInformationService = $personalInformationService;
    }

    public function index(): Response
    {
        $personalInformation = $this->personalInformationService->get();

        return Inertia::render('PersonalInformation', [
            'imageUrl' => asset("storage/$personalInformation->image_path"),
            'personalInformation' => $personalInformation,
        ]);
    }

    public function store(PersonalInformationUpdateRequest $request): Response
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $data['image_path'] = $path;
        }

        $dto = new PersonalInformationDTO($data);
        $personalInformation = $this->personalInformationService->updateById($data['id'], $dto);

        return Inertia::render('PersonalInformation', [
            'imageUrl' => asset("storage/$personalInformation->image_path"),
            'personalInformation' => $personalInformation,
        ]);
    }
}
