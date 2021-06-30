import restCountriesClient from '../clients/restCountriesClient';

export default class RestCountriesController {

    private clientInstance;

    constructor(clientInstance = restCountriesClient) {
        this.clientInstance = new clientInstance();
    }

    public async getAllCountries() {
        try {
            const getAll = await this.clientInstance.fetchAllCountries();
            console.log('result comeback with the controller', getAll);
            return getAll;
        } catch (error) {
            throw error;
        }
    }

}