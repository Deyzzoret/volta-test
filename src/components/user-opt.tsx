import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius:20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});


interface IPropsCard {
  description:string;
  title:string;
  linkR:string;
}
const UserOptCard = (props: IPropsCard) => {
  // const { product } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography  variant='h5' component='h2'>
          {props.title}
        </Typography><br></br>
        <Typography variant='body2' component='p'>
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
      <div style={{ textAlign:"center",margin:"0 auto"}}>
      <Button variant="outlined"><Link className="linkName" to={props.linkR}> Aller</Link></Button>
        
        </div>
      </CardActions>
    </Card>
  );
};



export default UserOptCard;
