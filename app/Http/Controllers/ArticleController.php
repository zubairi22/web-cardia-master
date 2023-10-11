<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Assignment;
use App\Models\VitalSign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $article = Article::paginate(5);

        return Inertia::render('Article/Index' , [
            'article' => $article
        ]);
    }

    public function create()
    {
        return Inertia::render('Article/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|mimes:jpeg,png',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('article', 'public');
        }

        Article::create($data);

        return to_route('article.index')->with('message', 'Input Artikel Berhasil');
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

    public function destroy(Article $article)
    {
        Article::destroy($article->id);

        return Redirect::to('/article');
    }
}
