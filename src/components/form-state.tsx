import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import StateManager from '../data-models/singleton';
import * as React from 'react';

const FormState: React.FC = () => {
  const [niveauH, setNiveauH] = React.useState('');
  const [probSante, setProbSante] = React.useState('');
  const [dateP, setDateP] = React.useState('');

  function changeNiveauH(evt) {
    setNiveauH(evt.target.value);
    console.log(niveauH);
  }

  function changeProbSante(evt) {
    console.log(probSante);
    console.log('-------------------');
    setProbSante('');
    setProbSante(evt.target.value);
    console.log(probSante);
  }

  function changeDateP(evt){
    setDateP(evt.target.value);
    console.log(dateP);
  }

  function saveData(){
    let manager = StateManager.getInstance();
    manager.addElement(dateP,probSante,niveauH)
    console.log(manager.getListState())
  }
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <h1> Saisie votre etat de santé</h1>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>
              Saisi de 1 à 5 votre état , où 1 c'est bien et 5 pas bien
            </FormLabel>

            <TextField
              id='outlined-number'
              label='Etat general'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={changeNiveauH}
            />
          </FormControl>
          <br></br>
          <br></br>

          <FormControl component='fieldset'>
            <FormLabel component='legend'>
              Avez-vous ressenti une arythmie depuis la dernière saisie?
            </FormLabel>
            <RadioGroup row aria-label='gender' name='row-radio-buttons-group'>
              <FormControlLabel
                value='oui'
                onClick={changeProbSante}
                control={<Radio />}
                label='Oui'
              />
              <FormControlLabel
                value='non'
                onClick={changeProbSante}
                control={<Radio />}
                label='Non'
              />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>

          <FormControl component='fieldset'>
            <FormLabel component='legend'>
              Date enquete
            </FormLabel>
          <br></br>

            <TextField
              id='filled-search'
              label='JJ/MM/AAAA'
              type='search'
              variant='filled'
              onChange={changeDateP}
            />
          </FormControl>
          <br></br>
          <br></br>
          <Button variant='contained' onClick={saveData}>Sauvegarder etat</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormState;
