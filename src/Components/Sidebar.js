import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import  InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star'
import  AccessTimeIcon from '@material-ui/icons/AccessTime'
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore'
import NoteIcon from '@material-ui/icons/Note'
import  NearMeIcon  from '@material-ui/icons/NearMe'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/UserSlice'

function Sidebar() {
    
    const dispatch = useDispatch()
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'/>} className="sidebar-compose" onClick={() => dispatch(openSendMessage())}>
            COMPOSE
        </Button>

        <SidebarOption Icon={InboxIcon} title="Indox" number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title="started" number={54}/>
        <SidebarOption Icon={AccessTimeIcon} title="time" number={54}/>
        <SidebarOption Icon={NearMeIcon} title="draft" number={54}/>
        <SidebarOption Icon={NoteIcon} title="send" number={54}/>
        <SidebarOption Icon={ExpandMoreIcon} title="more" number={54}/>

        <div className='sidebar-footer'>
            <div className='sidebar-footerIcons'>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar