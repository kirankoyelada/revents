import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar({setFormOpen}) {
    //history object
    const history=useHistory();
    //login or singout object
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    function handleSignout(){
        setIsAuthenticated(false);
        history.push('/');
    }
    return (
        <Menu fixed="top">
         <Container>
             <Menu.Item as={NavLink} exact to="/" header>
                 <img src="./assets/logo.jpg" alt="logo" style={{marginRight:15}}/>
                 Re-vents
             </Menu.Item>
             <Menu.Item name="Events" as={NavLink} to="/events"/>
             <Menu.Item name="Sandbox" as={NavLink} to="/sandbox"/>
             {isAuthenticated && 
             <Menu.Item as={NavLink} to="/createEvent">
                 <Button content="Create Event" positive inverted/>
             </Menu.Item>}
             {isAuthenticated ? <SignedInMenu signOut={handleSignout}/> : <SignedOutMenu setIsAuthenticated={setIsAuthenticated}/>}
        </Container>   
        </Menu>
    )
}
export default NavBar;