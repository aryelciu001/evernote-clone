import React, { Component } from 'react';
import './App.css';
import Editor from './editor'
import Sidebar from './sidebar'

const firebase = require('firebase');

export default class App extends Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  }

  deleteNote = (note, index) => {
    if (index === this.state.selectedNoteIndex) {
      this.setState({...this.state, selectedNote: null, selectedNoteIndex: null})
    }
    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete()
  }

  newNote = async (title) => {
    const note = {
      title,
      body: ''
    }
    const addingNewNote = await firebase
                            .firestore()
                            .collection('notes')
                            .add({...note, timestamp: firebase.firestore.FieldValue.serverTimestamp()})
  }

  selectNote = (note, index) => {
    this.setState({...this.state, selectedNote: note, selectedNoteIndex: index})
  }

  updateNote = (id, note) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }
  
  render() {
    const {selectedNote, selectedNoteIndex, notes} = this.state;
    return (
      <div className="app-container"> 
        <Sidebar 
          notes={notes} 
          selectedNoteIndex={selectedNoteIndex} 
          selectNote={(note, index)=>this.selectNote(note, index)}
          deleteNote={(note, index)=>this.deleteNote(note, index)}
          newNote={this.newNote}></Sidebar>
        {this.state.selectedNote ? 
        <Editor note={selectedNote} updateNote={this.updateNote}></Editor> : null
        }
      </div>
    );
  }

  componentDidMount () {
    firebase
      .firestore()
      .collection('notes')
      //onSnapshot is called when notes collection is updated in firebase
      .onSnapshot((serverUpdate) => {

        //array of notes
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data.id = _doc.id;
          return data; 
        });
        
        this.setState({ ...this.state, notes });
      }) 
  }
} 