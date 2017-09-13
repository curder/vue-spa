<?php

namespace App\Http\Controllers;

use App\Post;

class PostsController extends Controller
{
    public function index()
    {
        return Post::paginate(15);
    }

    public function show(Post $post)
    {
        return $post;
    }
}
