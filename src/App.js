import React from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = [
  { value: 'USA', label: 'United States' },
  { value: 'CAN', label: 'Canada' },
  { value: 'UK', label: 'United Kingdom' },
  // Add more countries as needed
];

const hobbies = [
  'Reading',
  'Sports',
  'Cooking',
  'Traveling',
  // Add more hobbies as needed
];

const Form = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={classes.inputField}
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        multiline
        rows={4}
        value={formik.values.address}
        onChange={formik.handleChange}
        className={classes.inputField}
      />
      <FormControl fullWidth className={classes.inputField}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl component="fieldset" className={classes.inputField}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          row
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.inputField}>
        <FormLabel component="legend">Hobbies/Interests</FormLabel>
        <FormGroup>
          {hobbies.map((hobby) => (
            <FormControlLabel
              key={hobby}
              control={
                <Checkbox
                  checked={formik.values.hobbies.includes(hobby)}
                  onChange={formik.handleChange}
                  name="hobbies"
                  value={hobby}
                />
              }
              label={hobby}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
