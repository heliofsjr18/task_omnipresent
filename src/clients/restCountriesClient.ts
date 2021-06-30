import fetch from 'node-fetch';

export default class RestCountriesClient {


    public async fetchAllCountries() {
        try {
            const fetchedResuls = await fetch('https://restcountries.eu/rest/v2/all').then(result => (result.json()));
            console.log(fetchedResuls);
            return fetchedResuls;
        } catch (error) {
            throw error;
        }
    }

    public async fetchFullCountryInfo(country: string) {
        try {
            const fetchedResuls = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`).then((result) => (result.json()));
            return fetchedResuls;
        } catch (error) {
            throw error;
        }
    }

}