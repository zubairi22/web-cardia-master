<?php

use App\Http\Controllers\API\ArticleApiController;
use App\Http\Controllers\API\AuthApiController;
use App\Http\Controllers\API\HospitalApiController;
use App\Http\Controllers\API\VitalSignApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('/auth' , AuthApiController::class);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResources([
        '/article' => ArticleApiController::class,
        '/hospital' => HospitalApiController::class,
        '/vital' => VitalSignApiController::class,
    ]);
    Route::get('/vital-history', [VitalSignApiController::class, 'vitalHistory']);
});
