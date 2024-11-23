<?php

namespace App\Http\Controllers;

use App\Domain\Skill\SkillService;
use App\Http\Requests\SkillUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    private SkillService $skillService;

    public function __construct(SkillService $skillService)
    {
        $this->skillService = $skillService;
    }

    public function index(): Response
    {
        return Inertia::render('Skill', [
            'skills' => $this->skillService->get(),
        ]);
    }

    public function store(SkillUpdateRequest $request): Response
    {
        $data = $request->validated();
        $this->skillService->update($data['data']);

        return Inertia::render('Skill', [
            'skills' => $this->skillService->get(),
        ]);
    }
}
