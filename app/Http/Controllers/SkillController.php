<?php

namespace App\Http\Controllers;

use App\Domain\Skill\SkillService;
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
    {dd($this->skillService->get());
        return Inertia::render('Skill', [
            'skill' => $this->skillService->get(),
        ]);
    }

    public function store(Request $request): Response
    {
        $data = $request->validated();

//        $dto = new SkillDTO($data);
//        $skill = $this->skillService->updateById($data['id'], $dto);

        return Inertia::render('Skill', [
            'skill' => '$skill',
        ]);
    }
}
