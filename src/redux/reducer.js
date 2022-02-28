import * as actions from './actionTypes'

let lastId=0;

export function reducer (state=[], action) {
    
    switch (action.type) {
        case actions.EVENT_ADDED: return [
            ...state, {
                description: action.payload.description, aproved:false
        }
        ]; break;
        case actions.DATE_ADDED: return {chosenDate:action.payload.date}; break;
        default : return state;
    }
}
    
  