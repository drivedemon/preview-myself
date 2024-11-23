<?php

namespace App\Http\Controllers;

use App\Domain\WorkExperience\WorkExperienceService;
use App\Http\Requests\WorkExperienceUpdateRequest;
use Inertia\Inertia;
use Inertia\Response;

class WorkExperienceController extends Controller
{
    private WorkExperienceService $workExperienceService;

    public function __construct(WorkExperienceService $workExperienceService)
    {
        $this->workExperienceService = $workExperienceService;
    }

    public function index(): Response
    {
        return Inertia::render('WorkExperience', [
            'workExperiences' => $this->workExperienceService->get(),
        ]);
    }

    public function store(WorkExperienceUpdateRequest $request): Response
    {
        $data = $request->validated();
        $this->workExperienceService->update($data['data']);

        return Inertia::render('WorkExperience', [
            'workExperiences' => $this->workExperienceService->get(),
        ]);
    }
}
