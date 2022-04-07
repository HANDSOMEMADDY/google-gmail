import { Checkbox, IconButton } from '@material-ui/core'
import  MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import React from 'react'
import './Email.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox'
import  PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'


function EmailList() {
  return (
    <div className='email'>
        <div className='email-setting'>
            <div className='email-settingleft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='email-settingright'>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
            </div>
            <div className='email-sections'>
                <Section Icon ={InboxIcon} title="primary" color="red" selected />
                <Section Icon ={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon ={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className='email-list'>
               <EmailRow title='Twitch'
               subject="hey fellow streamer"
               description='this is a test'
               time='10pm'
               />
                <EmailRow title='Twitch'
               subject="hellow bro here is your otp from zomato"
               description='this is a test'
               time='10pm'
               />
               

            </div>
    </div>
  )
}
export default EmailList;