import * as actions from './actionTypes'


let lastId=0;
export function reducer (state=[], action) {
    if (action.type===actions.EVENT_ADDED) {
        return [
            ...state, {
                id:++lastId,
                description: action.playload.description,
                aproved:false
            }
        ];
    } 
    else return state
}