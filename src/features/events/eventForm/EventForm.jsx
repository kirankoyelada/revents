import cuid from 'cuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment,Header,Form, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen,setEvents,createEvent,selectedEvent,updateEvent}){
    const initialValues= selectedEvent ?? {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    };
    const [values,setValue]=useState(initialValues);
    function handleFormSubmit(){
        console.log('selected event',selectedEvent);
        selectedEvent 
        ? updateEvent({...selectedEvent,...values}) 
        : createEvent({...values,id:cuid(),hostedBy:'Poorvi',attendees:[],hostPhotoURL:'/assets/user.jpg'});
        //setFormOpen(false);
    }

    function handleInputValue(e){
        const {name,value}=e.target;
        setValue({...values,[name]:value});
    }
    return(
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit Event' : "Create New Event"}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder="Event Title" name="title"
                    value={values.title} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" name="category" 
                     value={values.category} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" name="description"
                    value={values.description} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" name="city"
                    value={values.city} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" name="venue"
                    value={values.venue} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="Date" placeholder="Date" name="date"
                    value={values.date} onChange={(e)=>handleInputValue(e)}/>
                </Form.Field>
               <Button type="submit" floated="right" positive content="Submit"/>
               <Button type="submit" floated="right" content="Cancel" as={Link} to="/events"/>
            </Form>
        </Segment>
    );
}