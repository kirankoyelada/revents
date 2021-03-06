import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Item, Segment,List,Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import {deleteEvent} from '../eventActions';

export default function EventListItem({event}){
    console.log(event);
    const dispatch=useDispatch();
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
                <Button content="Delete" floated="right" color="red" onClick={()=>dispatch(deleteEvent(event.id))}/>
                <Button content="view" floated="right" color="teal" as={Link} to={`/events/${event.id}`}/>
            </Segment>
        </Segment.Group>
    );
}