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
                'title' => 'the superman',
                'description' => 'the superman is popular movie in the world',
                'image_name' => '1718374983_generate-a-detailed-studio-ghibli-inspired-portrait-featuring-the-subject-superman-ensure-that-the--192245958.png',
                'image_thumbnail' => '/storage/image/1718374983_generate-a-detailed-studio-ghibli-inspired-portrait-featuring-the-subject-superman-ensure-that-the--192245958.png'
            ]);
        Film::create([
            'title' => 'the medical',
            'description' => 'the medical is popular movie in the world',
            'image_name' => '1718302284_medical.jpg',
            'image_thumbnail' => '/storage/image/1718302284_medical.jpg'
        ]);
        Film::create([
            'title' => 'the cats',
            'description' => 'the cats is popular movie in the world',
            'image_name' => '1718306840_kucing-bengal.jpeg',
            'image_thumbnail' => '/storage/image/1718306840_kucing-bengal.jpeg'
        ]);
        Film::create([
            'title' => 'the sea',
            'description' => 'the sea is popular movie in the world',
            'image_name' => '1718309027_sea.png',
            'image_thumbnail' => '/storage/image/1718309027_sea.png'
        ]);
        Film::create([
            'title' => 'the president',
            'description' => 'the president is popular movie in the world',
            'image_name' => '1718309067_image.jpeg',
            'image_thumbnail' => '/storage/image/1718309067_image.jpeg'
        ]);
        Film::create([
            'title' => 'the girls',
            'description' => 'the girls is popular movie in the world',
            'image_name' => '1718309094_e40e76cf7f87aede3571819aad468493.jpg',
            'image_thumbnail' => '/storage/image/1718309094_e40e76cf7f87aede3571819aad468493.jpg'
        ]);
        Film::create([
            'title' => 'the war',
            'description' => 'the war is popular movie in the world',
            'image_name' => '1718309123_a-chibi-cartoon-of-a-sad-arab-child-amidst-a-war-zone-the-child-is-huddled-on-the-ground-their-eye-877953417.png',
            'image_thumbnail' => '/storage/image/1718309123_a-chibi-cartoon-of-a-sad-arab-child-amidst-a-war-zone-the-child-is-huddled-on-the-ground-their-eye-877953417.png'
        ]);

        for($i=0; $i<50; $i++) {
            Film::create([
                'title' => 'the superman',
                'description' => 'the superman is popular movie in the world',
                'image_name' => '1718374983_generate-a-detailed-studio-ghibli-inspired-portrait-featuring-the-subject-superman-ensure-that-the--192245958.png',
                'image_thumbnail' => '/storage/image/1718374983_generate-a-detailed-studio-ghibli-inspired-portrait-featuring-the-subject-superman-ensure-that-the--192245958.png'
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
