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
        Schema::create('ztl_job_descriptions', function (Blueprint $table) {
            $table->id();
            $table->string('job_tittle')->nullable();
            $table->string('job_id')->nullable();
            $table->string('qualification')->nullable();
            $table->string('job_description1')->nullable();
            $table->string('job_description2')->nullable();
            $table->string('job_requirements')->nullable();
            $table->string('job_responsibilites')->nullable();
            $table->string('job_post_logo')->nullable();

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
        Schema::dropIfExists('ztl_job_descriptions');
    }
};
