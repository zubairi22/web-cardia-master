<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\VitalSign;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class VitalSignApiController extends Controller
{
    public function index(): JsonResponse
    {
        $vitalSign = VitalSign::where('user_id' , Auth::id())->latest()->first();

        return response()
            ->json([
                'message' => 'Fetch Vital Sign Berhasil',
                'vitalSign' => $vitalSign
            ]);
    }

    public function store(Request $request): JsonResponse
    {
        if ($request->has('heart_rate')) {
            $data = [
                'heart_rate' => $request->input('heart_rate'),
                'user_id' => Auth::id()
            ];

            VitalSign::create($data);

            return response()
                ->json([
                    'message' => 'Input Vital Sign Berhasil',
                ]);
        }

        return response()
            ->json([
                'message' => 'Data Vital Sign tidak masuk',
            ], 400);
    }

    public function vitalHistory(): JsonResponse
    {
        // Retrieve heart rate data from the database for the authenticated user
        $heartRates = VitalSign::where('user_id', Auth::id())
            ->whereBetween('created_at', [
                now()->startOfMonth()->format('Y-m-d'),
                now()->format('Y-m-d')
            ])->get();

        // Group heart rate data by date and hour
        $groupedData = $heartRates->groupBy(function ($heartRate) {
            return Carbon::parse($heartRate->created_at)->format('Y-m-d');
        });

        return response()
            ->json([
                'message' => 'Fetch History Vital Sign Berhasil',
                'vitalSign' => $groupedData,
            ]);
    }
}
