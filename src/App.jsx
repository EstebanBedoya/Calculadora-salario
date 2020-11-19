import React, { useState } from 'react'
import {
  Grid, TextField, Button,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Paper
} from '@material-ui/core'
// import {Alert} from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const salario = (horas, valorHora) => {
  const soloInt = /^\d*$/ //expresion regular para solo permitir valores enteros positivos
  let informe = { 'bruto': 0, 'extra': 0, 'neto': 0 }

  if (!soloInt.test(horas) || !soloInt.test(valorHora)) return 'valores invalidos'

  if (horas <= 60) {
    if (horas > 48) {
      informe['bruto'] = 48 * valorHora
      informe['extra'] = (valorHora * 1.2) * (horas - 48)
    } else {
      informe['bruto'] = horas * valorHora
    }
    informe['neto'] = informe['bruto'] + informe['extra']
    return informe
  } else {
    return 'valores invalidos'
  }
}

const renderTable = (informe) => {
  if (informe === 'valores invalidos') {
    return <h5>valores invalidos :'c</h5>
  } else if (informe != null) {
    return <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead >
          <StyledTableCell component="th" align="right">Salario Bruto</StyledTableCell>
          <StyledTableCell component="th" align="right">Extra</StyledTableCell>
          <StyledTableCell component="th" align="right">Salario total neto</StyledTableCell>
        </TableHead>

        <TableBody>
          <TableCell component="th" align="center">{informe.bruto}</TableCell>
          <TableCell component="th" align="center">{informe.extra}</TableCell>
          <TableCell component="th" align="center">{informe.neto}</TableCell>
        </TableBody>
      </Table>

    </TableContainer>
  }
}

function App() {
  const [horas, setHoras] = useState('')
  const [valorHora, setValorHora] = useState('')
  const [informe, setInforme] = useState(null)

  const changeHoras = (e) => {
    setHoras(e.target.value)
  }
  const changevalorHora = (e) => {
    setValorHora(e.target.value)
  }

  const calcular = () => {
    setInforme(salario(horas, valorHora))
    setValorHora('')
    setHoras('')
  }

  return (
    <div className='full'>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <h1>Calculadora de salario</h1>
        </Grid>
        <Grid container item justify='center' alignItems='center'>
          <Grid item>
            <TextField
              label="Horas trabajadas"
              type="number"
              variant="filled"
              value={horas}
              onChange={changeHoras}
            />
          </Grid>
          <Grid item>
            <TextField
              label="valor por Hora"
              type="number"
              variant="filled"
              value={valorHora}
              onChange={changevalorHora}
            />
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: 7 }}>
          <Button variant="contained" color="default" onClick={calcular} >
            Calcular
        </Button>
        </Grid>

        <Grid item style={{ marginTop: 7 }}>
          {
            renderTable(informe)
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
