<?php

namespace App\Traits;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

trait ResponseTrait
{
    public function errorResponse(string $message, array $details = [], int $code = 400): JsonResponse
    {
        $response = [
            'is_request_success' => false,
            'error_message' => $message,
            'error_details' => $details
        ];

        Log::warning('response', $response + ['http_code' => $code]);
        return response()->json($response, $code);
    }

    public function exceptionResponse(Exception $exception): JsonResponse
    {
        return $this->errorResponse($exception->getMessage(), [], $exception->getCode());
    }

    public function successResponse(array $data = [], int $code = 200): JsonResponse
    {
        $response = [
            'is_request_success' => true,
        ];

        return response()->json($response + $data, $code);
    }
}