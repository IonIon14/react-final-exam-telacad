

import {combineReducers} from 'redux';

import formConstants from './formConstants';

import {reducer as formReducer} from 'redux-form'


export function mainReducer(state={
    employees:[],
    loadingEmployees:true,
    addingEmployees:false
},action){
    switch(action.type){
        case formConstants.receive:
            return Object.assign({},state,{
                employees: action.employees,
                loadingEmployees:false,
            });
        case formConstants.request:
            return Object.assign({},state,{
                loadingEmployees:true,
            });
        case formConstants.start:
            return Object.assign({},state,{
                addingEmployees:true,
            });
        case formConstants.add:
            return Object.assign({},state,{
                addingEmployees:false,
                employees:[
                    ...state.employees,
                    action.employees,
                ]
            });
        default:
            return state;
    }
}

const reducer=combineReducers({
    form:formReducer,
    main:mainReducer
});


export default reducer;