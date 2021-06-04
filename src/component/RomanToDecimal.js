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

const RomanToDecimal = () => {
  const classes = useStyles();
  const [romanNumber, setRomanNumber] = useState('');
  const [error, setError] = useState('Please Enter value');
  const [result, setResult] = useState(null);

  /*  const convertNumber = (e) => {
    var res = 0;
    let i;

    for (i = 0; i < e.target.value.length; i++) {
      var s1 = value(e.target.value.charAt(i));

      if (i + 1 < e.target.value.length) {
        var s2 = value(e.target.value.charAt(i + 1));

        if (s1 >= s2) {
          res = res + s1;
        } else {
          res = res + s2 - s1;
          i++;
        }
      } else {
        res = res + s1;
      }
      setResult(res);
    }
    
    setRomanNumber(e.target.value);
  }; */
  const convertNumber = (e) => {
    let res = 0;
    let i;
    if (typeof e.target.value !== 'string') {
      setError('Please input valid type');
    } else {
      setError('');
      setResult('');
      if (e.target.value === '') {
        setError('Please Enter input string');
        setResult('');
      } else {
        let div = e.target.value.toUpperCase();
        for (i = 0; i < div.length; i++) {
          var s1 = value(div.charAt(i));

          if (i + 1 < div.length) {
            var s2 = value(div.charAt(i + 1));

            if (s1 >= s2) {
              res = res + s1;
            } else {
              res = res + s2 - s1;
              i++;
            }
          } else {
            res = res + s1;
          }
          setResult(res);
        }
      }
    }
    setRomanNumber(e.target.value);
  };

  const value = (r) => {
    if (r === 'I') return 1;
    else if (r === 'V') return 5;
    else if (r === 'X') return 10;
    else if (r === 'L') return 50;
    else if (r === 'C') return 100;
    else if (r === 'D') return 500;
    else if (r === 'M') return 1000;
    else{
      setError('Invalid Input');
    }
  };

  return (
    <div>
      <form /* onSubmit={handleSubmit} */ className={classes.root}>
        <Typography variant="h3" color="primary">Roman -To- Number</Typography>
        <TextField
          className={classes.TextField}
          value={romanNumber}
          onChange={convertNumber}
          variant="outlined"
          autoFocus
        />
        {result && <Typography variant="h2">{result}</Typography>}
        {error && <Typography variant="h2" color="error">{error}</Typography>}
        <Button
          className={classes.Button}
          type="submit"
          variant="contained"
          color="primary"
        >
          SUBMIT
        </Button>
        <Link to="/dectorom" className="btn-primary">
          Decimal to Roman
        </Link>
      </form>
    </div>
  );
};

export default RomanToDecimal;
