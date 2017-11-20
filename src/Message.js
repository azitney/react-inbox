import React, { Component } from 'react';

class Message extends Component {
  handleStar = (e) => {
    console.log(e.target.id)
    e.preventDefault();
    this.props.updateStarFunc(e.target.id)
  }

  handleCheck = (e) => {
    console.log(e.target.id)
    this.props.updateCheckFunc(e.target.id)
  }



  render(){
    let labels = this.props.message.label.map((label, i)=>{
      return <span key={i} className='label label-warning'>{label}</span>
    })

    let isRead = this.props.message.read? 'read' : 'unread';
    let isCheck = this.props.message.check? 'selected' : '';
    let isChecked = this.props.message.check? 'checked' : '';
    let isStared = this.props.message.stared? 'star fa fa-star' : 'star fa fa-star-o';
    
    return(
      <div className={`row message ${isRead} ${isCheck}`} key={this.props.cssId}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input id={`${this.props.cssId}`} onClick={this.handleCheck} type="checkbox" checked={`${isChecked}`}/>
            </div>
            <div className="col-xs-2">
              <i id={`${this.props.cssId}`} onClick={this.handleStar} className={`${isStared}`}></i>

            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {labels}
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>


    );
  }
}

export default Message;
