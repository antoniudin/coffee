import * as actions from './actionTypes'

let lastId=0;
// export function reducer (state=[], action) {
//     if (action.type===actions.EVENT_ADDED) {
//         return [
//             ...state, {
//                 id:++lastId,
//                 description: action.payload.description,
//                 aproved:false
//             }
//         ];
//     } 
//     else return state
// }

export function reducer (state=[], action) {
    
    switch (action.type) {
        case actions.EVENT_ADDED: return [
            ...state, {
                id:++lastId,
                description: action.payload.description,
                aproved:false
            }
        ]; break;
        case actions.DATE_ADDED: return [
            ...state, {
                chosenDate: action.payload.date,
            }
        ]; break;
        default : return state;
    }
}
    
  