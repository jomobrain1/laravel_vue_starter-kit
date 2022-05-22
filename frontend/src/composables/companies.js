import { ref } from "vue"
import { useRouter } from "vue-router";

import axios from "axios"
export default function useCompanies(){
    const errors=ref('')
const companies= ref([])
const company = ref([])
const router = useRouter();
const getCompanies= async()=>{
 let response=   await axios.get('http://127.0.0.1:8000/api/employee')
 companies.value=response.data.data
}


const getCompany = async (id) => {
    let response = await axios.get('http://127.0.0.1:8000/api/employee/' + id)
    company.value = response.data.data;
}
const storeCompany = async (data) => {
    errors.value = ''
    try {
        await axios.post('http://127.0.0.1:8000/api/employee/', data)
        await router.push({name: 'Company'})
    } catch (e) {
        if (e.response.status === 422) {
            errors.value = e.response.data.errors
        }
    }
}

const updateCompany = async (id) => {
    errors.value = ''
    try {
        await axios.put('http://127.0.0.1:8000/api/employee/' + id, company.value)
        await router.push({name: 'Company'})
    } catch (e) {
        if (e.response.status === 422) {
           errors.value = e.response.data.errors
        }
    }
}

const destroyCompany = async (id) => {
    await axios.delete('http://127.0.0.1:8000/api/employee/' + id)
}

    return{
        errors,
        companies,
        company,
        getCompany,
        getCompanies,
        storeCompany,
        updateCompany,
        destroyCompany
    }

}