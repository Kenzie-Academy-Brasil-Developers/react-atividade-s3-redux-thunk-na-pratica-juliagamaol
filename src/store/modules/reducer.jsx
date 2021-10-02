import {ADD_COMMENT} from './actionTypes'

const initialState = {name:'Kenzinho', comments: []}

export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_COMMENT':
            return action.updateUser
        default:
            return state
    }
}