import React from 'react';
import Grid from '@material-ui/core/Grid';
import { UserOptCard } from './index';


const ListUserOptsCards = () => {
  return (
    <div>
      <Grid container justifyContent='center' spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <h1>Bienvenue!!!</h1>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <UserOptCard
            description={'Sur cette page vous pourrez voir le ensemble de vos enregistrements au cour du temps'}
            title={'Voir enregistrements'}
            linkR={'/list-state'}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <UserOptCard
            description={'Enregistrer votre état de santé actuel afin de elaborer des antécédents médicaux pour votre medecin'}
            title={'Saisir votre état de santé'}
            linkR={'/form-state'}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListUserOptsCards;
