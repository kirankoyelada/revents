import React from 'react';
import { Icon, Item, Segment,List,Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';


export default function EventListItem({event,selectEvent,deleteEvent}){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                    <Item.Image circular size="tiny" src={event.hostPhotoURL}/>
                    <Item.Content>
                        <Item.Header content={event.title}/>
                        <Item.Description>{event.hostedBy} </Item.Description>
                    </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/>{event.date}
                    <Icon name="marker"/>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>(
                        <EventListAttendee key={attendee.id} attendee={attendee}/>    
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>                
                <Button content="Delete" floated="right" color="red" onClick={()=>deleteEvent(event.id)}/>
                <Button content="view" floated="right" color="teal" onClick={()=>selectEvent(event)}/>
            </Segment>
        </Segment.Group>
    );
}