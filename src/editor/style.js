const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  titleInput: {
    boxSizing: 'border-box',
    border: 'none',
    padding: '10px',
    fontSize: '24px',
    width: 'calc(100% - 300px)',
    backgroundColor: '#29487d',
    color: 'white',
  },
  editIcon: {
    position: 'absolute',
    left: '310px',
    top: '12px',
    color: 'white',
    width: '10',
    height: '10'
  },
  editorContainer: {
    height: '100%',
    boxSizing: 'border-box'
  }
});

export default styles;