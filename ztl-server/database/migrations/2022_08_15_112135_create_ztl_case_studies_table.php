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
        Schema::create('ztl_case_studies', function (Blueprint $table) {
            $table->id();
              $table->string('project_name')->nullable();
                                    $table->string('case_title')->nullable();
                                    $table->longText('case_description')->nullable();
                                    $table->string('image')->nullable();
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
        Schema::dropIfExists('ztl_case_studies');
    }
};
