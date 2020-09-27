import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement,increment } from './TestReducer';

export default function Sandbox(){
    //get data from store
    const data=useSelector(state=>state.test.data)

    //get the dispatcher
    const dispatch=useDispatch();
    return(
        <>
            <h1>Sandbox Testing</h1>
            <h2>Data is :- {data} </h2>
            <Button color='green' content="Increment" onClick={()=>dispatch(increment(10))}/>
            <Button color='pink' content="Decrement" onClick={()=>dispatch(decrement(5))}/>
        </>
    )
}