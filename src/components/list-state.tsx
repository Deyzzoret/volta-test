import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StateManager from '../data-models/singleton';

const ListState: React.FC = () => {
  let managerState = StateManager.getInstance();

  return (
    <div>

      <Paper className='container'>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date enregistrement</TableCell>
              <TableCell>Arythmie depuis la derniere saisie</TableCell>
              <TableCell>État de sante au enregistrement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {managerState.getListState().map((state, id) => (
              <TableRow key={id}>
                <TableCell component='th' scope='row'>
                  {state.getDateS()}
                </TableCell>
                <TableCell>{state.getStateB()}</TableCell>
                <TableCell>{state.getLevelH()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Paper>

    </div>
  );
};
export default ListState;
