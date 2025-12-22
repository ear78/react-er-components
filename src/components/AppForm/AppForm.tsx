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
  isDarkMode?: boolean;
  click?: (event: React.SyntheticEvent) => void;
};
function AppForm({
  formData, click, formRef, isDarkMode,
}: AppFormProps) {
  /* strip HTML tags from input values */
  const stripHtmlTags = (str: string) => str.replace(/<\/?[^>]+(>|$)/g, '');

  let input;
  if (formData) {
    input = formData.map((d: any) => {
      if (d.inputType === 'checkbox') {
        return (
          <FormControlLabel
            key={`label-${d.name}`}
            control={<Checkbox name={d.name} size="medium" checked={d.inputVal} onChange={d.change} />}
            labelPlacement="start"
            label={d.labelText}
          />
        );
      } if (d.inputType === 'radio') {
        return (
          <RadioGroup
            key={`radios-${d.name}`}
            row
            aria-labelledby={`radios-${d.name}-group`}
            name={d.name}
            value={d.inputVal}
            onChange={d.change}
            sx={{ margin: '.5rem 0' }}
          >
            <FormControlLabel labelPlacement="start" value="left" control={<Radio />} label="Left" />
            <FormControlLabel labelPlacement="start" value="center" control={<Radio />} label="Center" />
            <FormControlLabel labelPlacement="start" value="right" control={<Radio />} label="Right" />
          </RadioGroup>
        );
      } if (d.inputType === 'color') {
        return (
          <TextField
            key={`textinput-${d.name}`}
            id={`outlined-${d.name}`}
            type={d.inputType}
            label={d.labelText}
            value={d.inputVal}
            onChange={d.change}
            name={d.name}
            variant="outlined"
            margin="normal"
            size="small"
          />
        );
      }
      return (
        <TextField
          key={`textinput-${d.name}`}
          id={`outlined-${d.name}`}
          label={d.labelText}
          value={stripHtmlTags(d.inputVal)}
          onChange={d.change}
          name={d.name}
          variant="outlined"
          margin="normal"
          size="small"
        />
      );
    });
  }

  return (formData
    ? (
      <form ref={formRef} onSubmit={click} className={`${styles.AppForm} ${isDarkMode ? styles.Dark : ''}`}>
        <div className={styles.FormInputs}>
          {input}
        </div>
        <Button sx={{ borderRadius: '25px', mt: 'auto', mb: '2.5rem' }} type="submit" color="secondary" variant="contained">Save</Button>
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
