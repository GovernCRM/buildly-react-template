import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  IconButton,
  MenuItem,
  Box,
  Typography,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './CreateContactStyles.css';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

const prefixes = ['Mr.', 'Mrs.', 'Ms.'];
const suffixes = ['Jr.', 'Sr.'];
const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
const addressTypes = ['Home', 'Work', 'Other'];

export function ContactModal({ isOpen, onClose }) {
  const [errors, setErrors] = useState({});
  const [contactPreferences, setContactPreferences] = useState({
    email: true,
    calls: true,
    textMessages: true,
    mailingAddress: true,
  });

  const handleContactPrefChange = (event) => {
    const { name, checked } = event.target;
    setContactPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // console.log(contactPreferences);

  const validateField = (name, value) => {
    if (!value) {
      return `${name} is required`;
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newErrors = {};
    let hasErrors = false;

    // Validate all required fields
    const requiredFields = [
      'prefix', 'firstName', 'familyName', 'preferredName', 'secondNames',
      'suffix', 'birthDate', 'gender', 'email', 'phoneMobile',
      'streetName', 'streetNumber', 'addressType', 'unit', 'city',
      'state', 'zip', 'county', 'professionalTitle', 'registrationState',
    ];

    requiredFields.forEach((field) => {
      const value = formData.get(field);
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      // Process form submission
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className="DialogMainContainer"
    >
      <DialogTitle className="DialogTitleContainer">
        <Typography variant="h6" component="h2" className="baskervville-sc-regular" sx={{ margin: 'auto' }}>
          Create contact
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box className="createContactBox" sx={{ '& .MuiTextField-root': { mb: 1 } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  select
                  fullWidth
                  name="prefix"
                  label="Prefix"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.prefix}
                  defaultValue=""
                >
                  {prefixes.map((prefix) => (
                    <MenuItem key={prefix} value={prefix}>
                      {prefix}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.prefix && (
                  <FormHelperText error>{errors.prefix}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.firstName}
                />
                {errors.firstName && (
                  <FormHelperText error>{errors.firstName}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <TextField
                  fullWidth
                  name="familyName"
                  label="Family Name"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.familyName}
                />
                {errors.familyName && (
                  <FormHelperText error>{errors.familyName}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="preferredName"
                  label="Preferred Name"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.preferredName}
                />
                {errors.preferredName && (
                  <FormHelperText error>{errors.preferredName}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={9}>
                <TextField
                  fullWidth
                  name="secondNames"
                  label="Second Name(s)"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.secondNames}
                />
                {errors.secondNames && (
                  <FormHelperText error>{errors.secondNames}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  select
                  fullWidth
                  name="suffix"
                  label="Suffix"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.suffix}
                  defaultValue=""
                >
                  {suffixes.map((suffix) => (
                    <MenuItem key={suffix} value={suffix}>
                      {suffix}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.suffix && (
                  <FormHelperText error>{errors.suffix}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="birthDate"
                  label="Birth Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.birthDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.birthDate && (
                  <FormHelperText error>{errors.birthDate}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  name="gender"
                  label="Gender"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.gender}
                  defaultValue=""
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.gender && (
                  <FormHelperText error>{errors.gender}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.email}
                />
                {errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  name="phoneMobile"
                  label="Phone Mobile"
                  type="tel"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.phoneMobile}
                />
                {errors.phoneMobile && (
                  <FormHelperText error>{errors.phoneMobile}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="mobileExt"
                  label="ext"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  name="altPhone"
                  label="Alt Phone"
                  type="tel"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="altExt"
                  label="ext"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1, fontWeight: 'small' }}>
                  Primary Address
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="streetName"
                  label="Street Name"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.streetName}
                />
                {errors.streetName && (
                  <FormHelperText error>{errors.streetName}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="streetNumber"
                  label="Street Number"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.streetNumber}
                />
                {errors.streetNumber && (
                  <FormHelperText error>{errors.streetNumber}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  name="addressType"
                  label="Type"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.addressType}
                  defaultValue=""
                >
                  {addressTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.addressType && (
                  <FormHelperText error>{errors.addressType}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="unit"
                  label="Unit"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.unit}
                />
                {errors.unit && (
                  <FormHelperText error>{errors.unit}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.city}
                />
                {errors.city && (
                  <FormHelperText error>{errors.city}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  fullWidth
                  name="state"
                  label="State"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.state}
                  defaultValue=""
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.state && (
                  <FormHelperText error>{errors.state}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="zip"
                  label="Zip"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.zip}
                />
                {errors.zip && (
                  <FormHelperText error>{errors.zip}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="county"
                  label="County"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.county}
                />
                {errors.county && (
                  <FormHelperText error>{errors.county}</FormHelperText>
                )}
              </Grid>

              {/* ////////////////////////////////////////////////////////////////////////////////////// */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1, fontWeight: 'small' }}>
                  Secondary Address
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="secondarystreetName"
                  label="Street Name"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.streetName}
                />
                {errors.streetName && (
                  <FormHelperText error>{errors.streetName}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="secondarystreetNumber"
                  label="Street Number"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.streetNumber}
                />
                {errors.streetNumber && (
                  <FormHelperText error>{errors.streetNumber}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  name="secondaryaddressType"
                  label="Type"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.addressType}
                  defaultValue=""
                >
                  {addressTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.addressType && (
                  <FormHelperText error>{errors.addressType}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="secondaryunit"
                  label="Unit"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.unit}
                />
                {errors.unit && (
                  <FormHelperText error>{errors.unit}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="secondarycity"
                  label="City"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.city}
                />
                {errors.city && (
                  <FormHelperText error>{errors.city}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  fullWidth
                  name="secondarystate"
                  label="State"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.state}
                  defaultValue=""
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.state && (
                  <FormHelperText error>{errors.state}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="secondaryzip"
                  label="Zip"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.zip}
                />
                {errors.zip && (
                  <FormHelperText error>{errors.zip}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="secondarycounty"
                  label="County"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.county}
                />
                {errors.county && (
                  <FormHelperText error>{errors.county}</FormHelperText>
                )}
              </Grid>
              {/* ////////////////////////////////////////////////////////////////////////////////////// */}
              <Grid item xs={12} sx={{ mt: 4 }}>
                <TextField
                  fullWidth
                  name="politicalAffiliation"
                  label="Political Affiliation"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.professionalTitle}
                />
                {errors.professionalTitle && (
                  <FormHelperText error>{errors.professionalTitle}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="registrationDate"
                  label="Registration Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.birthDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.birthDate && (
                  <FormHelperText error>{errors.birthDate}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="voterHistory"
                  label="Voter History"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.professionalTitle}
                />
                {errors.professionalTitle && (
                  <FormHelperText error>{errors.professionalTitle}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="precinct"
                  label="Precinct"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.professionalTitle}
                />
                {errors.professionalTitle && (
                  <FormHelperText error>{errors.professionalTitle}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="professionalTitle"
                  label="Professional Title"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.professionalTitle}
                />
                {errors.professionalTitle && (
                  <FormHelperText error>{errors.professionalTitle}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="professionalaffiliation"
                  label="Professional Affiliation"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.registrationState}
                />
                {errors.registrationState && (
                  <FormHelperText error>{errors.registrationState}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="socialMedia"
                  label="Social Media"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.registrationState}
                />
                {errors.registrationState && (
                  <FormHelperText error>{errors.registrationState}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
                <TextField
                  fullWidth
                  name="dateAdded"
                  label="Date Added"
                  type="date"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.birthDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.birthDate && (
                  <FormHelperText error>{errors.birthDate}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="addedBy"
                  label="Added by (User Name or ID)"
                  variant="outlined"
                  size="small"
                  required
                  error={!!errors.registrationState}
                />
                {errors.registrationState && (
                  <FormHelperText error>{errors.registrationState}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'small' }}>
                  How you’d like to be contacted?
                </Typography>
              </Grid>

              {/* Checkbox fields */}
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name="email"
                        checked={contactPreferences.email}
                        onChange={handleContactPrefChange}
                      />
                    )}
                    label="Email"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name="calls"
                        checked={contactPreferences.calls}
                        onChange={handleContactPrefChange}
                      />
                    )}
                    label="Calls"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name="textMessages"
                        checked={contactPreferences.textMessages}
                        onChange={handleContactPrefChange}
                      />
                    )}
                    label="Text Messages"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name="mailingAddress"
                        checked={contactPreferences.mailingAddress}
                        onChange={handleContactPrefChange}
                      />
                    )}
                    label="Mailing Address"
                  />
                </FormGroup>
              </Grid>

            </Grid>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            className="CancelModalButton"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="tertiary"
            style={{ color: 'white' }}
          >
            Save Contact
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
