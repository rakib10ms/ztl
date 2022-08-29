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
        Schema::create('ztl_our_partner_testimonials', function (Blueprint $table) {
            $table->id();
                 $table->string('heading_name')->nullable();
            $table->longText('heading_description')->nullable();
            $table->string('client_name')->nullable();
            $table->string('client_company_name')->nullable();
            $table->string('client_designation')->nullable();
            $table->string('client_image')->nullable();
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
        Schema::dropIfExists('ztl_our_partner_testimonials');
    }
};
