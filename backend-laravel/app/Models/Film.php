<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FilmUnggulan;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Film extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "description",
        "image_name",
        "image_thumbnail"
    ];

    public function unggulan(): HasOne
    {
        return $this->hasOne(FilmUnggulan::class, "film_id", "id");
    }
}
