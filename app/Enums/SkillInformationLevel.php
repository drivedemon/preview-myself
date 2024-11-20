<?php

namespace App\Enums;

enum SkillInformationLevel: int
{
    case Basic = 1;

    public function label(): string
    {
        return match ($this) {
            self::Basic => 'Basic',
        };
    }

    public static function all(): array
    {
        $cases = self::cases();

        $result = [];
        foreach ($cases as $case) {
            $result[$case->value] = $case->label();
        }

        return $result;
    }
}