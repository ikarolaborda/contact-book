<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContactAddress>
 */
class ContactAddressFactory extends Factory
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
            'state' => 'SP',
            'city' => 'São Paulo',
            'neighborhood' => 'Bela Vista',
            'address' => 'Avenida Paulista',
            'number' => '1000',
            'zip_code' => '01310-200',
        ];
    }
}
