export interface IEmployee {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    jobTitle: string,
    company: string,
    country: string
}

export type IConvertedEmployee = 
    Pick<IEmployee,
    'firstName' | 'lastName' | 'dateOfBirth' | 'jobTitle' | 'company'> & {
    country: {
        fullName: string,
        currency: string,
        Languages: string,
        timezone: string
    },
    additionalForAsiaOrEuro?: string;
}