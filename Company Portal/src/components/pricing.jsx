// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Pricings = (props) => {
  const classes = useStyles();
  console.log(props.data)
  return (
    <div id="pricing">
       {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.level}-${i}`} >
              <TableContainer   component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>{d.level}</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell align="right">{d.price}</TableCell><br />
                  <TableCell align="right">Fat&nbsp;(g)</TableCell><br />
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell><br />
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
            </div>
              ))
            : 'Loading...'}
    
    </div>
  );
}