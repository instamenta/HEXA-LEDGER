<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /** Run the migrations */
    public function up(): void
    {
        Schema::create('personal_access_tokens',
            function (Blueprint $t) {
                $t->id();
                $t->morphs('tokenable');
                $t->string('name');
                $t->string('token', 64)->unique();
                $t->text('abilities')->nullable();
                $t->timestamp('last_used_at')->nullable();
                $t->timestamp('expires_at')->nullable();
                $t->timestamps();
            });
    }

    /** Reverse the migrations */
    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
