import { IConvertedEmployee, IEmployee } from '../models/employees';
import employeesService from '../services/employeesService';

export default class EmployeesController {

    private serviceInstance;

    constructor(serviceInstance = employeesService) {
        this.serviceInstance = new serviceInstance();
    }

    public async setCountryOnEmployeesList(employeeList: IEmployee[]) : Promise<IConvertedEmployee[]>{
        try {
            const convertedEmployeesList: IConvertedEmployee[] = [];
            if(employeeList.length) {
                for (const employee of employeeList) {
                    const convertedEmployee = await this.serviceInstance.convertEmployee(employee);
                    convertedEmployeesList.push(convertedEmployee);
                }
            }
            return convertedEmployeesList;
        } catch (error) {
            throw error;
        }
    }

}