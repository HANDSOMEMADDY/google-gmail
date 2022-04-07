import React from 'react'
import "./header.css";
import {Avatar, IconButton} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search'
import  ArrrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'


function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='Gmail'/>
        </div>
        <div className='header-middle'>
            <SearchIcon/>
            <input placeholder='search mail' type='text'/>
            <ArrrowDropDownIcon/>
        </div>
        <div className='header-right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>

        </div>
    </div>
  )
}
export default Header