import { Checkbox, IconButton } from '@material-ui/core'
import  LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined'
import React from 'react'
import './emailrow.css'
import  StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function EmailRow({id,title,subject,description,time}) {

    const history = useHistory();
  return (
    <div onClick={ () => history.push("/mail")} className='email-row'>
        <div className='email-option'>
         <Checkbox/>
         <IconButton>
             <StarBorderOutlinedIcon/>
         </IconButton>
         <IconButton>
             <LabelImportantOutlinedIcon/>
         </IconButton>
        </div>
        <h3 className='email-title'>
            {title}
        </h3>
        <div  className='email-message'>
            <h4>{subject}{" "} <span className='email-description'>{description}</span></h4>
        </div>
        <div className='email-time'>{time}
        </div>
</div>
  )
}

export default EmailRow