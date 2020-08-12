import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import List from '@material-ui/core/List'
import {Divider, Button, ListItem} from '@material-ui/core'
import SidebarItem from '../sidebaritem'

class Sidebar extends Component {

  state = {
    addingNote: false,
    title: '',
  }

  newNoteBtnClick = () => {
    this.setState({...this.state, addingNote: !this.state.addingNote, title: ''})
  }

  updateTitle = (e) => {
    this.setState({...this.state, title: e.target.value})
  }

  newNote = () => {
    this.props.newNote(this.state.title)
    this.setState({...this.state, title: ''})
  }

  selectNote = () => {

  }

  deleteNote = (note, index) => {
    this.props.deleteNote(note, index)
  }
 
  render() {

    const {notes, classes, selectedNoteIndex} = this.props;

    return (
      <div className={classes.sidebarContainer}> 
        <Button 
          onClick={this.newNoteBtnClick}
          className={classes.newNoteBtn}
        >{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
        {
          this.state.addingNote ? 
          <div>
            <input
              value={this.state.updateTitle}
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter Note Title"
              onChange={this.updateTitle}
              value={this.state.title}
            ></input>
            <Button
              onClick={this.newNote}
              className={classes.newNoteSubmitBtn}
              disabled={!this.state.title}
            >Submit Note</Button>
          </div> 
          : null
        }
        <List>
          {notes ? notes.map((note, i) => {
            return <div key={i}>
              <SidebarItem 
                key={i}
                index={i}
                note={note}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={this.props.selectNote}
                deleteNote={(note, index) => this.deleteNote(note, index)}
              ></SidebarItem>
              <Divider></Divider>
            </div>
          }) : null}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
