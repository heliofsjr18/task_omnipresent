import EmployeesController from '../../src/controllers/employeesController';
import RestCountriesClient from '../../src/clients/restCountriesClient';

describe('setCountryOnEmployeesList', () => {
    let controller: EmployeesController;
    const fullRequest = require('../data/request.json');
    const expectedResponse = require('../data/expectedResponse.json');
    const usPartlyRequest = require('../data/usPartlyRequest.json');
    const gbrPartlyRequest = require('../data/gbrPartlyRequest.json');
    const indPartlyRequest = require('../data/indPartlyRequest.json');
    const usExpectedPartlyResponse = require('../data/usExpectedPartlyResponse.json');
    const gbrExpectedPartlyResponse = require('../data/gbrExpectedPartlyResponse.json');
    const indExpectedPartlyResponse = require('../data/indExpectedPartlyResponse.json');
    const USCountryResponse = require('../data/USCountryResponse.json');
    const GBRCountryResponse = require('../data/GBRCountryResponse.json');
    const INDCountryResponse = require('../data/INDCountryResponse.json');
    beforeEach(() => {
        jest.resetModules();
        controller = new EmployeesController();
    });
    
    test('Should fetch all the results using full request', async () => {
        const response = await controller.setCountryOnEmployeesList(fullRequest);
        expect(response).toEqual(expectedResponse);
    })

    test('Should fetch all the results using partly request', async () => {
        const response = await controller.setCountryOnEmployeesList(usPartlyRequest);
        expect(response).toEqual(usExpectedPartlyResponse);
    })

    test('Should call mocked function for USCountryResponse', async () => {
        const mockFetchFullCountry = jest.fn().mockImplementation(() => (USCountryResponse));
        jest.mock('../../src/clients/restCountriesClient', () => {
            return {
                fetchFullCountryInfo: mockFetchFullCountry
            };
        });
        const response = await controller.setCountryOnEmployeesList(usPartlyRequest);
        expect(response).toEqual(usExpectedPartlyResponse);
    })
    test('Should call mocked function for GBRCountryResponse', async () => {
        const mockFetchFullCountry = jest.fn().mockImplementation(() => (GBRCountryResponse));
        jest.mock('../../src/clients/restCountriesClient', () => {
            return {
                fetchFullCountryInfo: mockFetchFullCountry
            };
        });
        const response = await controller.setCountryOnEmployeesList(gbrPartlyRequest);
        expect(response).toEqual(gbrExpectedPartlyResponse);
    })
    test('Should call mocked function for INDCountryResponse', async () => {
        const mockFetchFullCountry = jest.fn().mockImplementation(() => (INDCountryResponse));
        jest.mock('../../src/clients/restCountriesClient', () => {
            return {
                fetchFullCountryInfo: mockFetchFullCountry
            };
        });
        const response = await controller.setCountryOnEmployeesList(indPartlyRequest);
        expect(response).toEqual(indExpectedPartlyResponse);
    })
})