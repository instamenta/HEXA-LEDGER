<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class TextWidget extends Model
{
    use HasFactory;

    protected $fillable = [
        "key",
        "image",
        "title",
        "content",
        "active",
    ];

    public function getTitle(string $key): string
    {
        $widget = Cache::set('text-widget-' . $key, function () use ($key) {
            return self::query()
                ->where('key', '=', $key)
                ->where('active', '=', 1)
                ->first();
        });

        return $widget->title ?? '';
    }

    public function getContent(string $key): string
    {
        $widget = Cache::set('text-widget-' . $key, function () use ($key) {
            return TextWidget::query()
                ->where('key', '=', $key)
                ->where('active', '=', 1)
                ->first();
        });


        return $widget->content ?? '';
    }
}
