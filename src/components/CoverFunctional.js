import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Fab,
  Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { fetchSingleHighlight } from '../redux/store';

const styles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: '1em',
    boxSizing: 'border-box'
  },
  media: {
    height: '500px'
  },
  spacing: {
    margin: '1em'
  },
  grow: {
    flexGrow: 1
  }
});

const CoverFunctional = props => {
  const classes = styles();
  const { imageUrl } = props;

  return (
    // <Link to={ modal? } style={{ textDecoration: 'none' }}>
    <Grid item xs={6}>
      <Card className={classes.root}>
        <CardMedia image={imageUrl} className={classes.media} />
        {/* <CardContent>
          <Typography variant='h6'>Selected Text</Typography>
          {selText}
          <Typography variant='h6' style={{ marginTop: '2rem' }}>
            Surrounding Text
          </Typography>
          {repText}
        </CardContent> */}
      </Card>
    </Grid>
  );
};

export default CoverFunctional;
