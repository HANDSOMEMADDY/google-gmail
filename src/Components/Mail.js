import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import  MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import React from 'react'
import './mail.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email'
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
import  CheckCircleIcon  from '@material-ui/icons/CheckCircle';
import  LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ExitToAppIcon  from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'

function Mail() {

  const history = useHistory();
  return (
    <div className='mail'> 
    <div className='mail-tools'>
      <div className='mail-toolleft'>
        <IconButton onClick={() => history.push("/")}>
          <ArrowBackIcon/>
        </IconButton>

        <IconButton>
          <MoveToInboxIcon/>
        </IconButton>

        <IconButton>
          <ErrorIcon/>
        </IconButton>

        <IconButton>
          <DeleteIcon/>
        </IconButton>

        <IconButton>
          <EmailIcon/>
        </IconButton>

        <IconButton>
          <WatchLaterIcon/>
        </IconButton>

        <IconButton>
          <CheckCircleIcon/>
        </IconButton>

        <IconButton>
          <LabelImportantIcon/>
        </IconButton>

        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </div>
      <div className='mail-toolright'>

      <IconButton>
          <UnfoldMoreIcon/>
        </IconButton>

        <IconButton>
          <PrintIcon/>
        </IconButton>

        <IconButton>
          <ExitToAppIcon/>
        </IconButton>
      </div>
      </div>
      <div className='mail-body'>
        <div className='mail-bodyheader'>
          <h2>subject</h2>
          <LabelImportantIcon className='mail-important'/>
          <p>Title</p>
          <p className='mail-time'>10am</p>
        </div>
        <div className='mail-message'>
        <p>This is my message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail