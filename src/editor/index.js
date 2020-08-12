import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Editor extends Component {
  state = {
    prevText: '',
    prevTitle:'',
    prevId: '',
    text: '',
    title: '',
    id: ''
  }

  updateBody = async (val) => {
    await this.setState({...this.state, text: val})
    this.update();
  }

  updateTitle = (e) => {
    this.setState({...this.state, title: e.target.value}, () => {
      this.update();
    })
  }

  //debounce means waiting for a few secs before
  //REALLY updating
  update = debounce(() => {
      
      this.props.updateNote(this.state.id, {
        title: this.state.title, 
        body: this.state.text
      });
    }, 1500);

  componentDidMount () {
    if (this.props.note) {
      const {title, body, id} = this.props.note
      this.setState({...this.state, text: body, title, id})
    }
  }

  componentDidUpdate () {
    if (this.props.note.id !== this.state.id) {
      const {title, body, id} = this.props.note
      const prevTitle = this.state.title
      const prevText = this.state.text
      const prevId = this.state.id
      this.setState({...this.state, prevText, prevTitle, prevId, text: body, title, id}, () => {
        this.props.updateNote(this.state.prevId, {
          title: this.state.prevTitle, 
          body: this.state.prevText
        });
      })
    }
  }

  render() {

    const {classes, note} = this.props;
    const modules = {
      clipboard: {
        matchVisual: false
      }
    }
    return (
      <div className={classes.editorContainer}>
        <div>
          <input type="text" value={this.state.title} onChange={this.updateTitle}  className={classes.titleInput}></input>
        </div>
        <ReactQuill value={this.state.text} onChange={this.updateBody} modules={modules}></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
