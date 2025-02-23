<script>
export default {
    data() {
        return {
            organizations: []
        }
    },
    mounted() {
        this.fetchOrganizations()
    },
    methods: {
        fetchOrganizations() {
            axios.get('/api/ceo/organization')
                .then(response => this.organizations = response.data)
                .catch(error => console.log(error))
        }
    }
}
</script>

<template>
    <div class="overflow-hidden overflow-x-auto p-6">
        <div class="min-w-full align-middle ring-1 ring-zinc-200 dark:ring-slate-700">
            <table class="min-w-full divide-y divide-gray-300 dark:divide-slate-600">
                <thead class="bg-zinc-200 dark:bg-slate-700">
                    <tr> 
                        <th class="px-6 py-3 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 tracking-wider">ID</span>
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
                            <span class="text-xs leading-4 font-medium text-gray-500 tracking-wider dark:text-gray-300">Phone
                                number</span>
                        </th>
                        <th class="px-6 py-3 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 tracking-wider dark:text-gray-300">Created</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="organization in organizations">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{ organization.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{ organization.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{ organization.email
                            }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.phone_number }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-gray-400">{{
                            organization.created_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
