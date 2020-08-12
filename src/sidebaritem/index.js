import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import {removeHTMLTags} from '../helpers'

class SidebarItem extends Component {
  selectNote = (note, index) => {
    this.props.selectNote(note, index)
  }

  deleteNote = (e, note, index) => {
    e.stopPropagation()
    if (window.confirm(`Delete "${note.title}"?`)) {
      this.props.deleteNote(note, index);
    }
  }
  
  render() {
    const {note, selectedNoteIndex, index, classes} = this.props;
    return (
      <div key={index}
        onClick={() => {
        this.selectNote(note, index)
      }}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
        >
          <div 
            className={classes.textSection}
          >
            <ListItemText
              primary={note.title}
              secondary={removeHTMLTags(note.body.substring(0,30)+'...')}>
            </ListItemText>
            <DeleteIcon
              onClick={(e)=>this.deleteNote(e, note, index)}
              className={classes.deleteIcon}
            ></DeleteIcon>
          </div>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItem);
