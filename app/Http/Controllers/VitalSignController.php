<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VitalSign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class VitalSignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $vitalSign = VitalSign::select('vital_signs.*')
            ->join(DB::raw('(SELECT user_id, MAX(created_at) as max_created_at
                    FROM vital_signs
                    WHERE user_id = '.Auth::id().'
                    GROUP BY user_id) as latest_vital_signs'),
                function($join) {
                    $join->on('vital_signs.user_id', '=', 'latest_vital_signs.user_id')
                        ->on('vital_signs.created_at', '=', 'latest_vital_signs.max_created_at');
                })
            ->with('user')
            ->paginate(10);

        return Inertia::render('Dashboard' , [
            'vital' => $vitalSign
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
