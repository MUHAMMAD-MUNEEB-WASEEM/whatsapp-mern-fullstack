import { Avatar, IconButton } from '@material-ui/core';
import { DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import './Sidebar.css';


import image from '../images/my image3jpg.jpg' 
import SidebarChat from './SidebarChat/SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="sidebar__header">
                <Avatar src={image}/>
                <div className="sidebar__headerRight">
                  <IconButton>
                    <DonutLarge />
                  </IconButton>
                  <IconButton>
                    <ChatIcon/>
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
            </div>
                            
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                      <SearchOutlined/>  
                      <input type="text" placeholder="Search or start new chat"/>
                    </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
