<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('work_experience_information', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('work_experience_id');
            $table->string('description');
            $table->timestamps();

            $table->foreign('work_experience_id')
                ->references('id')->on('work_experiences')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_experience_information');
    }
};
