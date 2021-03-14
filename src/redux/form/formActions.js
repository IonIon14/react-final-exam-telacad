import formConstants from './formConstants';

const fs=require("fs");

export function receiveEmployees(employee){
    return{
        type:formConstants.receive,
        employee,
    };
}
export function requestEmployees(employee){
    return{
        type:formConstants.request,
        employee,
    };
}

export function startEmployeeAdd(){
    return{
        type:formConstants.start,
    };
}

export function addEmployee(){
    return(dispatch,getState)=>{
        const form=getState().form;
        console.log(form);
        const employee={
            name:form.employee.values.name,
            surname:form.employee.values.surname,
            job:form.employee.values.job,
            salary:form.employee.values.salary,
            date:form.employee.values.date
        };
        const dataConvert=JSON.stringify(employee,null,2);
        console.log(dataConvert);


        dispatch(
            {
                type:formConstants.add,
                employee,
            }
        );
    };
}



