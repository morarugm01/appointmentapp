<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrganizationResource;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrganizationController extends Controller
{
    public function index(Request $request)
    {
        Log::info($request);
        return OrganizationResource::collection(Organization::when($request->filters['name'], function($query, $name) {
            $query->where('name', 'like', "%$name%");
        })
        ->when($request->filters['email'], function($query, $email) {
            $query->where('email', 'like', "%$email%");
        })
        ->when($request->filters['phone_number'], function ($query, $phoneNumber) {
            $query->where('phone_number', 'like', "%$phoneNumber%");
        })
        ->paginate(10));
    }
}
