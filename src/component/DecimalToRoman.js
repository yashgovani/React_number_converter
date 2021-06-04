import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  Button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '25%',
  },
  TextField: {
    width: '80%',
  },
}));

const DecimalToRoman = () => {
  const classes = useStyles();
  const [decimalNumber, setDecimalNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('Please Enter Number');

  const convertRoman = (e) => {
    if (isNaN(e.target.value)) {
      setError('Please enter a valid number');
    } else {
      setError('');
      setResult('');

      if (e.target.value === '') {
        setError('Please enter number');
        setResult('');
      } else if (Number(e.target.value) > 3999 || Number(e.target.value) <= 0) {
        setError('Value must be in range 1 to 3999');
      } else {
        setError('');
        setResult(decToRom(e.target.value));
      }
    }
    setDecimalNumber(e.target.value);
  };

  return (
    <div>
      <form /* onSubmit={convertRoman} */ className={classes.root}>
        <Typography variant="h3" color="primary">Decimal-To-Roman</Typography>
        <TextField
          className={classes.TextField}
          value={decimalNumber}
          onChange={convertRoman}
          variant="outlined"
          autoFocus
        />
        {result && <Typography variant="h2">{result}</Typography>}
        {error && <Typography variant="h2" color="error" >{error}</Typography>}
        <Button
          className={classes.Button}
          type="submit"
          variant="contained"
          color="primary"
        >
          SUBMIT
        </Button>
        <Link to="/" className="btn-primary">
          Roman To decimal
        </Link>
      </form>
    </div>
  );
};

const decToRom = (number) => {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let arr = [];
  let sym = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];
  let i = 12;
  while (number > 0) {
    let div = Math.floor(number / num[i]);
    number = number % num[i];
    while (div--) {
      arr.push(sym[i]);
    }
    i--;
  }
  return arr.join('');
};
export default DecimalToRoman;
