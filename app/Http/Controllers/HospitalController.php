<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Models\VitalSign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class HospitalController extends Controller
{
    public function index()
    {
        $hospitals = Hospital::paginate(5);

        return Inertia::render('Hospital/Index' , [
            'hospitals' => $hospitals
        ]);
    }

    public function create()
    {
        return Inertia::render('Hospital/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'type' => 'required',
            'location' => 'required',
            'contact' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        Hospital::create($data);

        return to_route('hospital.index');
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

    public function destroy(Hospital $hospital)
    {
        Hospital::destroy($hospital->id);

        return Redirect::to('/hospital');
    }
}
