import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import MessageList from './MessageList';
import Toolbar from './Toolbar';

class App extends Component {
  state={
    messageList: [
      {label: ['dev', 'personal'], check: false, stared: false, read: false, subject: 'You cant input the protocol without calculating the mobile RSS protocol!'},
      {label: [], check: false, stared: false, read: false, subject: 'connecting the sustem wont do anything, wee need to input the mobile AI panel!'},
      {label: ['dev'], check: false, stared: false, read: false, subject: 'Use the 1080ph HTTP feed, then you can parse the corss-platform hard drive!'},
      {label: [], check: false, stared: true, read: true, subject: 'We need the program the primary TCP hard drive!'},
      {label: ['personal'], check: false, stared: false, read: false, subject: 'If we override the interface, we can get to the HRRP feed through the virtual EXE interface!'},
      {label: [], check: false, stared: false, read: true, subject: 'We need to back up the wireless GB driver!'},
      {label: ['dev', 'personal'], check: false, stared: true, read: true, subject: 'We need to index the mobile PCI bus!'},
      {label: [], check: false, stared: false, read: true, subject: 'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!'}
    ]
  }

  updateStar = (index) => {
    let changeStar = this.state.messageList[index]
    changeStar.stared? changeStar.stared = false : changeStar.stared = true
    this.setState({messageList: this.state.messageList})
  }

  updateCheck = (index) => {
    let changeCheck = this.state.messageList[index]
    console.log(changeCheck)
    changeCheck.check? changeCheck.check = false : changeCheck.check = true
    this.setState({messageList: this.state.messageList})
  }

  updateBulkSelected = () =>{
    let filteredCheck = this.state.messageList.filter((message) => message.check)
    filteredCheck.length === this.state.messageList.length? this.state.messageList.map((message)=> message.check = false) : this.state.messageList.map((message)=> message.check = true);
    this.setState({messageList: this.state.messageList})
  }

  updateMarkRead = () => {
    let filteredCheck = this.state.messageList.filter((message) => message.check)
    filteredCheck.map((message)=> message.read = true)
    filteredCheck.map((message)=> message.check = false)
    this.setState({messageList: this.state.messageList})
  }

  updateMarkUnread = () => {
    let filteredCheck = this.state.messageList.filter((message)=> message.check)
    filteredCheck.map((message)=> message.read = false)
    filteredCheck.map((message)=> message.check = false)
    this.setState({messageList: this.state.messageList})

  }

  updateDelete = () => {
    let filteredCheck = this.state.messageList.filter((message)=> !message.check)
    this.setState({messageList: filteredCheck})
  }

  updateAddLabel = (labels) => {
    let filteredCheck = this.state.messageList.filter((message)=> message.check)
    filteredCheck.map((message)=> message.label.push(labels))
    filteredCheck.map((message)=> message.check = false)
    this.setState({messageList: this.state.messageList})
  }

  updateRemoveLabel = (labels) => {
    let filteredCheck = this.state.messageList.filter((message)=> message.check)
    filteredCheck.map((message)=> message.label.splice(message.label.indexOf(labels)))
    filteredCheck.map((message)=> message.check = false)
    this.setState({messageList: this.state.messageList})
  }

  render() {

    return (
      <div className="App">

        <Toolbar
          updateBulkSelectedFunc = {this.updateBulkSelected}
          updateMarkReadFunc = {this.updateMarkRead}
          updateMarkUnreadFunc = {this.updateMarkUnread}
          updateDeleteFunc = {this.updateDelete}
          updateAddLabelFunc = {this.updateAddLabel}
          updateRemoveLabelFunc = {this.updateRemoveLabel}
          messageList = {this.state.messageList}
        />
        <MessageList
          messageList = {this.state.messageList} updateStarFunc={this.updateStar}
          updateCheckFunc={this.updateCheck}
        />

      </div>
    );
  }
}

export default App;
