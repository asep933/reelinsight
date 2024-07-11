<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Film;

class FilmUnggulan extends Model
{
    use HasFactory;

    protected $fillable = [
        "film_id"
    ];

    public function film(): HasMany
    {
        return $this->hasMany(Film::class);
    }
}
