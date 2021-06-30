import restCountriesClient from '../clients/restCountriesClient';
import { IConvertedEmployee, IEmployee } from '../models/employees';

export default class EmployeesService {

    private restCountryClientInstance;

    constructor(restCountryClientInstance = restCountriesClient) {
        this.restCountryClientInstance = new restCountryClientInstance();
    }

    public async convertEmployee(employee: IEmployee) : Promise<IConvertedEmployee> {
        try {
            const getFullCountry = await this.getFullCountry(employee.country);
            let convertedEmployee: IConvertedEmployee;
            convertedEmployee = {
                ...employee,
                country: {
                    fullName: getFullCountry.name,
                    currency: getFullCountry.currencies,
                    Languages: getFullCountry.languages,
                    timezone: getFullCountry.timezones
                },
                additionalForAsiaOrEuro:
                    getFullCountry.region === 'Europe' ||
                    getFullCountry.region === 'Asia'
                        ? `${employee.firstName}${employee.lastName}${employee.dateOfBirth}`
                        : undefined
            }
            return convertedEmployee;
        } catch (error) {
            throw error;
        }
    }

    private async getFullCountry(country: string) {
        try {
            const fullCountry = await this.restCountryClientInstance.fetchFullCountryInfo(country);
            return fullCountry;
        } catch (error) {
            throw error;
        }
    }

}