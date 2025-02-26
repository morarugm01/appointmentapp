<script setup>
import { onMounted } from 'vue';
import useOrganizations from '@/composables/organizations';
import { TailwindPagination } from 'laravel-vue-pagination';

const { organizations, getOrganizations, filters } = useOrganizations();

onMounted(() => {
    getOrganizations()
})


</script>

<template>
    <div class="flex flex-col space-y-4">
        <div class="flex flex-row w-full gap-2">
            <div>
                <input v-model="filters.name" type="text" name="name" id="name" aria-label="Name"
                    class="  rounded-md bg-white dark:bg-slate-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Search by name" />
            </div>
            <div>
                <input v-model="filters.email" type="email" name="email" id="email" aria-label="Email"
                    class=" rounded-md bg-white dark:bg-slate-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Search by E-mail" />
            </div>
            <div>
                <input v-model="filters.phone_number" type="phone_number" name="phone_number" id="phone_number" aria-label="Phone"
                    class=" rounded-md bg-white dark:bg-slate-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Search by phone" />
            </div>
        </div>
        <!--Table-->
        <div class="overflow-hidden min-w-full align-middle ring-1 ring-zinc-200 dark:ring-slate-700 rounded-md">
            <table class="min-w-full divide-y divide-gray-300 dark:divide-slate-600">
                <thead class="bg-zinc-200 dark:bg-slate-700">
                    <tr>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 tracking-wider">ID</span>
                        </th>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium tracking-wider text-gray-500 dark:text-gray-300">Name</span>
                        </th>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 tracking-wider dark:text-gray-300">Email</span>
                        </th>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 tracking-wider dark:text-gray-300">Phone
                                number</span>
                        </th>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 tracking-wider dark:text-gray-300">Created</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="organization in organizations.data">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.email
                        }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.phone_number }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.created_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <TailwindPagination :data="organizations" @pagination-change-page="getOrganizations" class="mt-4 gap-1"
            :item-classes="['bg-white', 'text-gray-900', 'border-transparent', 'dark:bg-slate-700', 'dark:text-gray-400', 'dark:border-gray-600', 'rounded-md']"
            :active-classes="['bg-indigo-200', 'text-gray-900', '', 'dark:bg-indigo-700', 'dark:text-gray-400', 'dark:border-gray-600', 'rounded-md']" />
    </div>
</template>
