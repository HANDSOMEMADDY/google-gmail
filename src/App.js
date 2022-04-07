import  React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Mail  from './Components/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Components/SendMail';
import {useSelector} from 'react-redux'
import { selectsendMessageIsOpen} from "./features/UserSlice";

function App() {

    const  sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  return (
    <Router>
    <div className="app">
      <Header/>
      <div className='app-body'>
      <Sidebar/>

      <Switch>
        <Route exact path="/mail">
          <Mail/>
        </Route>
        <Route exact path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
    { sendMessageIsOpen &&  <SendMail/>}
    </div>
    </Router>
  );
}
export default App;
