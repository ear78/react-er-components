import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styles from './AppForm.module.scss';
import AlertBanner from '../AlertBanner/AlertBanner';

type AppFormProps = {
  formData: {}[];
  formRef?: React.LegacyRef<HTMLFormElement> | undefined;
  click?: (event: React.SyntheticEvent) => void;
};
function AppForm({ formData, click, formRef }: AppFormProps) {
  let input;
  if (formData) {
    input = formData.map((d: any) => (
      d.inputType === 'checkbox'
        ? (
          <FormControlLabel
            key={`label-${d.name}`}
            control={<Checkbox name={d.name} size="medium" checked={d.inputVal} onChange={d.change} />}
            labelPlacement="start"
            label={d.labelText}
          />
        )
        : d.inputType === 'radio'
          ? (
            <RadioGroup
              key={`radios-${d.name}`}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name={d.name}
              value={d.inputVal}
              onChange={d.change}
            >
              <FormControlLabel labelPlacement="start" value="left" control={<Radio />} label="Left" />
              <FormControlLabel labelPlacement="start" value="center" control={<Radio />} label="Center" />
              <FormControlLabel labelPlacement="start" value="right" control={<Radio />} label="Right" />
            </RadioGroup>
          ) : (
            <TextField
              key={`textinput-${d.name}`}
              id={`outlined-${d.name}`}
              label={d.labelText}
              value={d.inputVal}
              onChange={d.change}
              name={d.name}
              variant="outlined"
              margin="normal"
              size="small"
            />
          )
      // <FormInput
      //   key={d.name}
      //   labelText={d.labelText}
      //   inputType={d.inputType}
      //   inputVal={d.inputVal}
      //   name={d.name}
      //   change={d.change}
      //   placeHolder={d.placeHolder}
      // />
    ));
  }

  return (formData
    ? (
      <form ref={formRef} onSubmit={click} className={styles.AppForm}>
        {input}
        {/* <button type="submit">Save</button> */}
        <Button sx={{ borderRadius: '25px', mt: 2 }} type="submit" color="secondary" variant="contained">Save</Button>
      </form>
    )
    : (
      <AlertBanner>
        Please add&nbsp;
        <b>form setup </b>
        data...
      </AlertBanner>
    )
  );
}

export default AppForm;
