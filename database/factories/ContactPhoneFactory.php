<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContactPhone>
 */
class ContactPhoneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $contactIDs = \App\Models\Contact::pluck('id');
        return [
            'contact_id' => $contactIDs->random(),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
