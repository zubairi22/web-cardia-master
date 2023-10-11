<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $CreateAssignment = Permission::create(['name'=>'create-assignment']);
        $UpdateAssignment = Permission::create(['name'=>'update-assignment']);
        $DeleteAssignment = Permission::create(['name'=>'delete-assignment']);

        $admin = Role::create(["name" => 'admin']);
        $entries = Role::create(["name" => 'entries']);
        $validator = Role::create(["name" => 'validator']);

        $admin->givePermissionTo($CreateAssignment);
        $admin->givePermissionTo($UpdateAssignment);
        $admin->givePermissionTo($DeleteAssignment);


        $entries->givePermissionTo($CreateAssignment);
        $entries->givePermissionTo($UpdateAssignment);

        $validator->givePermissionTo($UpdateAssignment);

    }
}
