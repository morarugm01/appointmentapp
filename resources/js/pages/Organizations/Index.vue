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
            axios.get('/api/ceo/organizations')
                .then(response => this.organizations = response.data)
                .catch(error => console.log(error))
        }
    }
}
</script>

<template>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <table class="min-w-full divide-y divide-gray-200 border">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium uppercase tracking-wider text-gray-500">Name</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Phone number</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Created</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                    <tr v-for="organization in organizations">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ organization.id }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ organization.name }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ organization.email }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ organization.phone_number }}</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ organization.created_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>