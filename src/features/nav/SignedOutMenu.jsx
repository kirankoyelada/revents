import React from 'react';
import { Button,  Menu } from 'semantic-ui-react';

export default function SignedOutMenu({setIsAuthenticated}){
    return(
            <Menu.Item position="right">
                 <Button onClick={()=>setIsAuthenticated(true)} content="Login" inverted basic/>
                 <Button content="Register" inverted basic style={{marginLeft:'0.5em'}}/>
             </Menu.Item>
    );
}