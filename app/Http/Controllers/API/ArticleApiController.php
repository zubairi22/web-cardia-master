<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;

class ArticleApiController extends Controller
{

    public function index()
    {
        $article = Article::latest()->paginate(5);

        return response()
            ->json([
                'message' => 'Fetch Artikel Berhasil',
                'article' => $article
            ]);
    }
}
