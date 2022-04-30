import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styles from './AppForm.module.scss';

type AppFormProps = {
  formData: {}[];
  formRef: React.LegacyRef<HTMLFormElement> | undefined;
  click: (event: React.SyntheticEvent) => void;
};
function AppForm({ formData, click, formRef }: AppFormProps) {
  const input = formData.map((d: any) => (
    d.inputType === 'checkbox'
      ? (
        <FormControlLabel
          control={<Checkbox name={d.name} size="medium" checked={d.inputVal} onChange={d.change} />}
          labelPlacement="start"
          label={d.labelText}
        />
      )
      : d.inputType === 'radio'
        ? (
          <RadioGroup
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
  return (formData
    ? (
      <form ref={formRef} onSubmit={click} className={styles.AppForm}>
        {input}
        {/* <button type="submit">Save</button> */}
        <Button sx={{ borderRadius: '25px', mt: 2 }} type="submit" color="secondary" variant="contained">Save</Button>
      </form>
    )
    : <div>Loading...</div>
  );
}

export default AppForm;
