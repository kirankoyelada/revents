import React,{useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import {sampleData} from '../../../app/api/sampleData';

export default function  EventDashboard(){
    const [events,setEvents]=useState(sampleData);

    // function handleCreateForm(event){
    //     setEvents([...events,event]);
    // }

    // function handleUpdateForm(updatedEvent){
    //     // iterate all events and find updated id based on avaable events, if match return that event else 
    //     console.log('update event ',updatedEvent);
    //     setEvents(events.map(evt=>evt.id === updatedEvent.id ? updatedEvent : evt));
    //     console.log('update event ',events);
    //     selectEvent(null);
    // }

    function handleDeleteEvent(evnId){
        console.log('events.filter(evt=>evt.id !== evnId) ',events.filter(evt=>evt.id !== evnId));
        setEvents(events.filter(evt=>evt.id !== evnId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent={handleDeleteEvent}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Events filters</h2>
                {/* {formOpen &&
                <EventForm setFormOpen={setFormOpen} setEvents={setEvents} 
                createEvent={handleCreateForm} selectedEvent={selectedEvent}
                updateEvent={handleUpdateForm}/>} */}
            </Grid.Column>
        </Grid>
    )
}