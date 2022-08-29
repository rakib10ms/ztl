<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ztl_job_applications', function (Blueprint $table) {
            $table->id();
             $table->string('name')->nullable();
             $table->string('email')->nullable();
             $table->string('phone')->nullable();
             $table->string('emergency_no')->nullable();
             $table->string('highest_qualificiation')->nullable();
             $table->string('current_employeer')->nullable();
             $table->string('experience_from_year')->nullable();
             $table->string('experience_from_month')->nullable();
             $table->string('notice_period')->nullable();
             $table->string('cv')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ztl_job_applications');
    }
};
