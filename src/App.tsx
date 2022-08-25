import React, { useReducer } from 'react';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { approveAC, decrementAC, incrementAC, initialStateType, resetAC } from './store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store/state';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { Input } from './componets/Input';
import Avatar from '@material-ui/core/Avatar';
import { Height } from '@material-ui/icons';
import { Btn } from './componets/Btn';


const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: "radial-gradient(circle farthest-corner at 100px 50px, #FBF2EB, #352A3B)",
  },
  rootItem: {
    border: '1px solid black',
    borderRadius: '10px',
    height: '60%'

  },
  avatar: {
    width: '60px',
    height: '60px'
  }
});

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector<AppRootStateType, initialStateType>(state => state.reducer)

  return (
    <Grid container className={classes.root}  alignItems='center' justify="space-evenly" >
      <Grid item container className={classes.rootItem} xs={4} direction='column' alignItems='center'  justify='space-around'>
        <Input color='success' textLabel={'MaxValue'} variant='filled'/>
        <Input color='success' textLabel={'MinValue'} variant='filled'/>
      </Grid>
      <Grid item container className={classes.rootItem} xs={2} alignItems='center' justify='center'> 
      <Avatar className={classes.avatar}>{state.count}</Avatar>
      </Grid>
      <Grid item container className={classes.rootItem} xs={4} alignItems='center' justify='space-around'>
  
           <Btn color='success' name='Increment' variant='contained' startIcon={<LocalHospitalIcon />} size='large' callback={() => {dispatch(incrementAC())}}/>
           <Btn color='success' name='Decrement' variant='contained' startIcon={<IndeterminateCheckBoxIcon />} size='large' callback={() => {dispatch(decrementAC())}}/>
           <Btn color='success' name='Approve' variant='contained' startIcon={<ThumbUpOutlinedIcon />} size='large' callback={() => {dispatch(approveAC())}}/>
           <Btn color='success' name='Reset' variant='contained' startIcon={<ReplayIcon />} size='large' callback={() => {dispatch(resetAC())}}/>

      </Grid>
    </Grid>
  );
}

export default App;
