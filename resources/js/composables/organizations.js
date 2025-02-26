import debounce from "lodash/debounce";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";


export default function useOrganizations() {
    const organizations = ref({});
    const router = useRouter();
    let firstLoad = true;
    const sortings = ref([]);
    const filters = ref({
        'name': '',
        'email': '',
        'phone_number': ''
    });

    const getOrganizations = async (page = 1, updateUrl = true) => {
        try {
            const params = {
                page,
                sortings: sortings.value,
                filters: filters.value,
            }
            const response = await axios.get(`/api/ceo/organizations`, { params });
            organizations.value = response.data;

            if (updateUrl) {
                if (firstLoad && page === 1) {
                    firstLoad = false;
                } else {
                    router.push({ query: { page } });
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getFilteredOrganizations = debounce(() => getOrganizations(1), 500);

    watch(filters, () => {
        getFilteredOrganizations();
    }, { deep: true });

    return { organizations, getOrganizations, filters };
}
