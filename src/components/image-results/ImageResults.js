import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'; // v1.x
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';




class ImageResults extends Component {
    state = {
      open: false,
      currentImg: ''
    };
  
    handleOpen = img => {
      this.setState({ open: true, currentImg: img });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      let imageListContent;
      const { images } = this.props;
  
      if (images) {
        imageListContent = (
          <GridList cols={3}>
            {images.map(img => (
              <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt={img.tags} className="imgLarge" />
              <GridListTileBar
                title={img.tags}
                subtitle={<span>by: {img.user}</span>}
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(img.largeImageURL)} aria-label={`info about ${img.tags}`} >
                    <ZoomInIcon className="zoomin" color="white" />                                    
                  </IconButton> 
                  
                }
              />
            </GridListTile>
            ))}
          </GridList>
        );
      } else {
        imageListContent = null;
      }
  
     // const actions = [
        //<IconButton aria-label="Close" onClick={this.handleClose} className="closeBtn">
        //<CloseIcon />
        //</IconButton>
      //];
  
      return (
        <div>
          {imageListContent}
          <Dialog 
            onClose={this.handleClose}
            modal={false}
            open={this.state.open} 
            >
            <DialogTitle id="simple-dialog-title" onClick={this.handleClose} className="closeIcon"><i class="fas fa-times closeBtn"></i></DialogTitle>    
      
            <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
          </Dialog>
        </div>
      );
    }
  }
  
  ImageResults.propTypes = {
    images: PropTypes.array.isRequired
  };
  
  export default ImageResults;