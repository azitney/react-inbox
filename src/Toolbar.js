import React, { Component } from 'react';

class Toolbar extends Component {
  handleBulkSelect = (e) => {
    this.props.updateBulkSelectedFunc()
  }

  handleMarkRead = (e) => {
    this.props.updateMarkReadFunc()
  }

  handleMarkUnread = (e) => {
    this.props.updateMarkUnreadFunc()
  }

  handleDelete = (e) => {
    this.props.updateDeleteFunc()
  }

  handleAddLabel = (e) => {
    this.props.updateAddLabelFunc(e.target.value)
  }

  handleRemoveLabel = (e) => {
    this.props.updateRemoveLabelFunc(e.target.value)
  }

  render (){
    return(
  <div class="row toolbar">
  <div class="col-md-12">
    <p class="pull-right">
      <span class="badge badge">2</span>
      unread messages
    </p>

    <button onClick={this.handleBulkSelect} class="btn btn-default">
      <i class="fa fa-check-square-o"></i>
    </button>

    <button onClick={this.handleMarkRead} class="btn btn-default">
      Mark As Read
    </button>

    <button onClick={this.handleMarkUnread} class="btn btn-default">
      Mark As Unread
    </button>

    <select  onChange={this.handleAddLabel} class="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select onChange={this.handleRemoveLabel} class="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button onClick={this.handleDelete} class="btn btn-default">
      <i class="fa fa-trash-o"></i>
    </button>
  </div>
</div>

    );
  }
}

export default Toolbar;
