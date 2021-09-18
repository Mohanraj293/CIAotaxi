import React, { useState } from "react";
import Navbar from "./Navbar";
import "../assets/css/Home.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  CardContent,
  CardActions,
  Card,
  Button,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  form: {},
  card1: {
    border: "2px solid #002984",
  },
  card2: {
    border: "2px solid #ba000d",
  },
}));
export default function Home() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  document.title = "CIAo Taxi";

  const [changeTrip, setChangeTrip] = useState(true);
  return (
    <>
      <div style={{ marginBottom: "70px" }}>
        <Navbar />
      </div>
      <div style={{ padding: 16, margin: "auto", maxWidth: 850 }}>
        <h2 style={{ textAlign: "center" }}>CIAo Welcomes You</h2>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              style={{ width: "150px", margin: "0 auto", display: "flex" }}
              size="large"
              variant="outlined"
              color="primary"
              onClick={() => setChangeTrip(true)}
            >
              One Way
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{ width: "150px", margin: "0 auto", display: "flex" }}
              size="large"
              variant="outlined"
              color="secondary"
              onClick={() => setChangeTrip(false)}
            >
              Round Trip
            </Button>
          </Grid>
        </Grid>
        {changeTrip ? (
          <>
            <Card
              className={classes.card1}
              variant="outlined"
              style={{ marginTop: "20px" }}
            >
              <CardContent>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      className={classes.form}
                      required
                      id="standard-basic1"
                      label="From"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      className={classes.form}
                      required
                      id="standard-basic2"
                      label="To"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.form}
                      fullWidth
                      required
                      id="standard-basic3"
                      label="Mobile Number"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Select your vehicle type
                      </FormLabel>
                      <RadioGroup
                        aria-label="vehicletype"
                        name="vehicletype"
                        value={value}
                        onChange={handleChange}
                        row
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="Sedan"
                            control={<Radio />}
                            label="Sedan"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="XUV"
                            control={<Radio />}
                            label="XUV"
                          />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                      <KeyboardDatePicker
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <KeyboardTimePicker
                        fullWidth
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  style={{ width: "550px", margin: "0 auto", display: "flex" }}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Book Your One way Trip
                </Button>
              </CardActions>
            </Card>
          </>
        ) : (
          <>
            <Card
              className={classes.card2}
              variant="outlined"
              style={{ marginTop: "20px" }}
            >
              <CardContent>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      className={classes.form}
                      required
                      id="standard-basic1"
                      label="From"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      className={classes.form}
                      required
                      id="standard-basic2"
                      label="To"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.form}
                      fullWidth
                      required
                      id="standard-basic3"
                      label="Mobile Number"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Select your vehicle type
                      </FormLabel>
                      <RadioGroup
                        aria-label="vehicletype"
                        name="vehicletype"
                        value={value}
                        onChange={handleChange}
                        row
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="Sedan"
                            control={<Radio />}
                            label="Sedan"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="XUV"
                            control={<Radio />}
                            label="XUV"
                          />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                      <KeyboardDatePicker
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <KeyboardTimePicker
                        fullWidth
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  style={{ width: "550px", margin: "0 auto", display: "flex" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                >
                  Book Your Round Trip
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
