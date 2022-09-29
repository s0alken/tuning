import api from '../Api/api';

const getClientes = async () => {
    const response = await api.get('/clientes');

    return response.data;
}

export default getClientes