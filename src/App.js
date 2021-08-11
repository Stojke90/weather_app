import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '16px'
  },
}));

const App = () => {

  const classes = useStyles();
  const [cityName, setCityName] = useState('');
  
  const weatherByCitySearch = (name) => {
    setCityName(name);
  };

  const component = [
    <Header weatherByCitySearch={weatherByCitySearch}/>, 
    <Main cityName={cityName}/>
  ];

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        {component.map(component => 
          <Grid item style={{margin: 'auto'}} xs={10} key={uuidv4()}>
            {component}
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default App;