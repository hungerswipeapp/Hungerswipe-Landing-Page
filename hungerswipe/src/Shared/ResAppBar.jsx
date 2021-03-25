import React, { Component } from 'react';
import {
  AppBar, Toolbar, Typography, List, ListItem, ListItemText,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import '../ResAppBar.css';

import pinkLogo from '../Assets/HungerSwipe_Logo_pink.png';

const styleSheet = {
  list: {
   width: 200,
	 marginLeft: 'auto',
   borderRadius: '20px',
   textAlign: 'center',
   margin: '5px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center'
  },
  padding : {
    paddingRight: 30,
    cursor: "pointer",
  },
  sideBarIcon: {
    padding: 0,
    color: "#ED5DBB",
    cursor: "pointer",
	 marginLeft: 'auto'
  },
  BackdropProps: {
    background: 'transparent',
  },
  root: {
    justifyContent: 'center'
  },
  appbar: {
    justifyContent: 'center'
  }
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar className={this.props.classes.appbar} position="fixed" color="white" elevation={0}>
          <Toolbar>
				 <div>
				 	<img src={pinkLogo} alt="Logo"/>
				 </div>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
              <Typography color="inherit" variant = "headline"></Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
        classes={{ 
          paper: this.props.classes.BackdropProps}}     
		    anchor={"top"}
        open={this.state.drawer}
        onClose={()=>{this.setState({drawer:false})}}
        onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {`${this.props.classes.list} list_`}>
               <ListItem 
                className={`${this.props.classes.root}`}
                key = {1} 
                button 
                divider>
                  <a href="/"><ListItemText primary="HOME"/></a></ListItem>
               <ListItem 
                className={`${this.props.classes.root}`}
                key = {2} 
                button 
                divider>
                  <a href="#about">ABOUT</a></ListItem>
               <ListItem 
                className={`${this.props.classes.root}`}
                key = {3} 
                button 
                divider>
                  <a href="#features">FEATURES</a></ListItem>
               <ListItem 
                className={`${this.props.classes.root}`}
                key = {3} 
                button> 
                  LOGIN </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar className={this.props.classes.appbar} position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" ></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><a href="/">HOME</a></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><a href="#features">FEATURES</a></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><a href="#about">ABOUT</a></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >LOGIN</Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

export default withStyles(styleSheet)(ResAppBar);