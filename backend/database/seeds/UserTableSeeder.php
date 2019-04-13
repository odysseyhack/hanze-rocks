<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Transport company',
            'email' => 'transport@ebmdev.nl',
            'password' => bcrypt('test123'),
        ]);

        DB::table('users')->insert([
            'name' => 'Emergency company',
            'email' => 'emergency@ebmdev.nl',
            'password' => bcrypt('test123'),
        ]);
    }
}
