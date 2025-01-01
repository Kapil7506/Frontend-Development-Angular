export interface IUser{
    name : string,
    address : any,
    email : string
}

export interface IDesignation{
    name : string,
    address : any,
    email : string
}

export interface IResponse{
    id : number,
    name : string,
    username : string,
    email : string,
    address : any,
    phone : string,
    website : string,
    company : any
}
export interface APIResponse{
    message: string,
    result : boolean,
    data : any
}
export interface Employee{
    empName: string,
    empId: string,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}

export interface profileproject{
    empName: string,
    empId: string,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    projectName: string, 
    startDate: string,
    ExceptedEnddate : string,
    id : number,
    name : string,
}

export interface project{
    ClientProjectId : string,
    projectName: string, 
    startDate: string,
    ExceptedEnddate : string,
    leadByEmpId: string,
    completedDate : string,
    contactPerson: string,
    contactPersonPhoneno: string,
    totalEmpWorking: string,
    projectCost: string,
    projectDetails: string,
    contactPersonEmailId: string,
    clientId: string,
}