import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function HomePage({history}){
     return(
         <Segment inverted textAlign="center" vertical className="masthead">
             <Container>
                 <Header as="h1">
                     <Image size="massive" src="/assets/logo.jpg" style={{marginBottom:12}}/>
                     Re-vents
                 </Header>
                 <Button size="huge" inverted onClick={()=>history.push('/events')}>
                     Get Started
                     <Icon name="right arrow"/>
                 </Button>
             </Container>
         </Segment>
     );
}