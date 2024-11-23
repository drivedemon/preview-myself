<?php

use App\Enums\SkillInformationLevel;
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
        Schema::create('skill_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('skill_id');
            $table->string('name');
            $table->string('level');
            $table->timestamps();

            $table->foreign('skill_id')
                ->references('id')->on('skills')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skill_information');
    }
};
