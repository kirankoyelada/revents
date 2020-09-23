import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

function NavBar({setFormOpen}) {
    return (
        <Menu fixed="top">
         <Container>
             <Menu.Item header>
                 <img src="./assets/logo.jpg" alt="logo" style={{marginRight:15}}/>
                 Re-vents
             </Menu.Item>
             <Menu.Item name="Events"/>
             <Menu.Item>
                 <Button content="Create Event" onClick={()=>setFormOpen(true)}  positive inverted/>
             </Menu.Item>
             <Menu.Item position="right">
                 <Button content="Login" inverted basic/>
                 <Button content="Register" inverted basic style={{marginLeft:'0.5em'}}/>
             </Menu.Item>
        </Container>   
        </Menu>
    )
}
export default NavBar;