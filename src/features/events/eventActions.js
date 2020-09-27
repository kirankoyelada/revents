import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventsConstants";

//crate event
export function createEvent(event){
    return {
        type:CREATE_EVENT,
        payload:event
    }
}

//update event
export function updateEvent(event){
    return {
        type:UPDATE_EVENT,
        payload:event
    }
}

//delete event
export function deleteEvent(eventId){
    return {
        type:DELETE_EVENT,
        payload:eventId
    }
}