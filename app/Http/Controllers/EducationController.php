<?php

namespace App\Http\Controllers;

use App\Domain\Education\EducationDTO;
use App\Domain\Education\EducationService;
use App\Http\Requests\EducationUpdateRequest;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    private EducationService $educationService;

    public function __construct(EducationService $educationService)
    {
        $this->educationService = $educationService;
    }

    public function index(): Response
    {
        return Inertia::render('Education', [
            'education' => $this->educationService->get(),
        ]);
    }

    public function store(EducationUpdateRequest $request): Response
    {
        $data = $request->validated();

        $dto = new EducationDTO($data);
        $education = $this->educationService->updateById($data['id'], $dto);

        return Inertia::render('Education', [
            'education' => $education,
        ]);
    }
}
