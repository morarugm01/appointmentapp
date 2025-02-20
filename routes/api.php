<?php

use App\Http\Controllers\OrganizationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('ceo/organization', [OrganizationController::class, 'index'])->name('ceo.organization.index');


