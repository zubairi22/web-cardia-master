<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Hospital;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HospitalApiController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $userLatitude = $request->input('latitude');
        $userLongitude = $request->input('longitude');

        $hospital = Hospital::select('name', 'type', 'location','contact', 'latitude', 'longitude', DB::raw('( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance'))
            ->addBinding($userLatitude, 'select')
            ->addBinding($userLongitude, 'select')
            ->addBinding($userLatitude, 'select')
            ->having('distance', '<', 100)
            ->orderBy('distance')
            ->get();

        return response()
            ->json([
                'message' => 'Fetch Hospital Berhasil',
                'hospital' => $hospital,
            ]);
    }
}
