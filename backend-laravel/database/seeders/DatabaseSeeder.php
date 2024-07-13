<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\FilmUnggulan;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin')
        ]);

        Film::create([
            'title' => 'the boy',
            'description' => 'the president is popular movie in the world',
            'image_name' => 'boy.png',
            'image_thumbnail' => '/storage/image/1718309067_image.jpeg'
        ]);
        Film::create([
            'title' => 'the dracula',
            'description' => 'the dracula is popular movie in the world',
            'image_name' => 'dracula.png',
            'image_thumbnail' => '/storage/image/dracula.png'
        ]);
        Film::create([
            'title' => 'the president',
            'description' => 'the president is popular movie in the world',
            'image_name' => 'image.jpeg',
            'image_thumbnail' => '/storage/image/image.jpeg'
        ]);
        Film::create([
            'title' => 'the kunoici',
            'description' => 'the kunoici is popular movie in the world',
            'image_name' => 'kunoici.png',
            'image_thumbnail' => '/storage/image/kunoici.png'
        ]);
        Film::create([
            'title' => 'the ninja',
            'description' => 'the ninja is popular movie in the world',
            'image_name' => 'ninja.png',
            'image_thumbnail' => '/storage/image/ninja.png'
        ]);
        Film::create([
            'title' => 'the superman',
            'description' => 'the superman is popular movie in the world',
            'image_name' => 'superman.png',
            'image_thumbnail' => '/storage/image/superman.png'
        ]);
        Film::create([
            'title' => 'the village',
            'description' => 'the village is popular movie in the world',
            'image_name' => 'village.png',
            'image_thumbnail' => '/storage/image/village.png'
        ]);

        for($i=0; $i<50; $i++) {
            Film::create([
                'title' => 'the superman',
                'description' => 'the superman is popular movie in the world',
                'image_name' => 'superman.png',
                'image_thumbnail' => '/storage/image/superman.png'
            ]);
        }

        FilmUnggulan::create([
            "film_id" => 2,
        ]);
        FilmUnggulan::create([
            "film_id" => 5,
        ]);
        FilmUnggulan::create([
            "film_id" => 11,
        ]);
        FilmUnggulan::create([
            "film_id" => 7,
        ]);
    }
}
