import * as actions from "./actionTypes"
import { EVENT_ADDED } from "./actionTypes"

export function eventAdded (description) {
    return {
        type: actions.EVENT_ADDED,
        payload: {
            description
        }
    }
}