<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FirstLoginRequest;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\UpdateAdminRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    /**
     * Update user in first login
     */
    public function firstLogin(FirstLoginRequest $request): RedirectResponse
    {
        $request->user()->update([
            'password' => Hash::make($request['password']),
            'first_login' => false,
            'password_change_required' => false,
        ]);

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $userId = $request->user()->id;
            $extension = $request->file('image')->extension();
            $imagePath = $request->file('image')->storeAs('student-images', 'profile-image-' . $userId . '.' . $extension, 'public');
        }

        $request->user()->student()->update([
            'image' => $imagePath ?? null,
            'student_id' => $request['student_id'],
            'section' => $request['section'],
        ]);

        return redirect()->route('certificate');
    }

    /**
     * Update the user's password and student id and section.
     */
    public function update(ProfileRequest $request): RedirectResponse
    {
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $userId = $request->user()->id;
            $extension = $request->file('image')->extension();
            $imagePath = $request->file('image')->storeAs('student-images', 'profile-image-' . $userId . '.' . $extension, 'public');
        }

        $request->user()->update([
            'password' => Hash::make($request['password']),
            'first_login' => false,
            'password_change_required' => false,
        ]);

        $request->user()->student()->update([
            'student_id' => $request['student_id'],
            'section' => $request['section'],
        ]);

        if (isset($imagePath)) {
            $request->user()->student()->update([
                'image' => $imagePath,
            ]);
        }

        return redirect()->route('certificate');
    }
}
