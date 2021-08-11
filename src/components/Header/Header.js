import React, {useState} from 'react';
import './Header.css';
import {makeStyles, Paper, InputBase, Divider, IconButton} from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
}));


const Header = ({weatherByCitySearch}) => {

    const [city, setCity] = useState('');
    const classes = useStyles();

    return (

    	<div className='header'>
        <div className={classes.flex}>
          <div className='headerUpper'>
                <p id='appName'><strong>{document.title}</strong></p>
            </div>
            <div className='headerlower'>
                <Paper component="form" className={classes.root}>
                  <InputBase
                    type='search' 
                    className={classes.input} 
                    placeholder=" ex. City,Country..." 
                    inputProps={{ 'aria-label': 'search city' }}
                    onChange={e => setCity(e.target.value)} 
                  />
                  <Divider className={classes.divider} orientation="vertical" />
                  <IconButton 
                    onClick={() => weatherByCitySearch(city)} 
                    type="submit" 
                    className={classes.iconButton} 
                    aria-label="search"
                  >
                    <LocationSearchingIcon />
                  </IconButton>
                </Paper>
            </div>
        </div>
    		<hr className='w'/>
    		<hr className='w'/>
    	</div>
        
    );
};
export default Header;
