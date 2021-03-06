import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import SandboxTesting from '../../features/sandbox/SandboxTesting';

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage}/>
      <Route path={'/(.+)'} render={()=>(
        <>
        <NavBar/>
        <Container className="main">
          <Route exact path="/events" component={EventDashboard}/>        
          <Route exact path="/sandbox" component={SandboxTesting}/>        
          <Route path="/events/:id" component={EventDetailedPage}/>
          <Route path={["/createEvent","/manage/:id"]} component={EventForm}/>
        {/* <EventDashboard formOpen={formOpen} 
          setFormOpen={setFormOpen} 
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
          key={selectedEvent ? selectedEvent.id : null}/> */}
        </Container>
        </>
      )}/>
    </>
  );
}

export default App;
