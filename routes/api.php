<?php

use App\Http\Controllers\OrganizationController;
use Illuminate\Support\Facades\Route;


Route::get('ceo/organizations', [OrganizationController::class, 'index'])->name('ceo.organizations.index');


