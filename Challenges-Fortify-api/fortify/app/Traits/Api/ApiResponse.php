<?php

namespace App\Traits\Api;
use Symfony\Component\HttpFoundation\JsonResponse;


trait ApiResponse
{
    public function ok($message, $data = [], $status_code = 200){
        return response()->json([
            'message' => $message,
            'data' => $data,
            'status code' => $status_code
        ]);
    }
}
