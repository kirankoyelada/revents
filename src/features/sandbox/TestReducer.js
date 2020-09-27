//increment action
const INCREMENT_COUNTER='INCREMENT_COUNTER';
//decrement action
const DECREMENT_COUNTER='DECREMENT_COUNTER';

//increment action creator
export function increment(amount){
    return{
        type:INCREMENT_COUNTER,
        payload:amount
    }
}

//decrement action creator

export function decrement(amount){
    return{
        type:DECREMENT_COUNTER,
        payload:amount
    }
}

const initialValue={
    data:42
}

export default function TestReducer(state=initialValue,action){
switch(action.type) {
    case INCREMENT_COUNTER:return {
        ...state,
        data: state.data + action.payload
    };
    case DECREMENT_COUNTER:return {
        ...state,
        data: state.data - action.payload
    };
    default:return state;
}

}