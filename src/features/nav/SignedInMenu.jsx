import React from 'react';
import { Link } from 'react-router-dom';
import {  Dropdown,  Image,  Menu } from 'semantic-ui-react';

export default function SignedInMenu({signOut}){
    return(
            <Menu.Item position="right">
                 <Image circular src='/assets/user.jpg' avatar/>
                 <Dropdown pointing="top left" text="bob">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                        <Dropdown.Item as={Link} text="My Profile" icon="user"/>
                        <Dropdown.Item onClick={signOut} as={Link} text="Sign out" icon="power"/>
                    </Dropdown.Menu>
                 </Dropdown>
             </Menu.Item>
    );
}