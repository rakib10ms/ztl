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
        Schema::create('ztl_partners', function (Blueprint $table) {
            $table->id();
              $table->string('first_name')->nullable();
                $table->string('last_name')->nullable();
                $table->string('email')->nullable();
                $table->string('phone')->nullable();
                $table->string('customer_type')->nullable();
                $table->string('description')->nullable();
                $table->string('partner_type')->nullable();
                $table->string('country')->nullable();
                $table->string('job_title')->nullable();
                $table->string('notification')->nullable()->comment('1=true,0=false');
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
        Schema::dropIfExists('ztl_partners');
    }
};
