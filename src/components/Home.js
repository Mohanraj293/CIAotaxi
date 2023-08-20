import React, { useState, useRef } from "react";
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
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format, addDays } from "date-fns";
import DialogBox from "./DialogBox";
import "../firebase/FirebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
const useStyles = makeStyles(() => ({
  form: {},
  card1: {
    border: "2px solid #002984",
  },
  card2: {
    border: "2px solid #ba000d",
  },
}));

export default function Home() {
  const ChildRef = useRef();
  const classes = useStyles();

  const [formData, setFormData] = useState({
    id: "",
    from: "",
    to: "",
    name: "",
    phoneNumber: "",
    vType: "Mini",
    pickUpDate: new Date(),
    pickUptime: new Date(),
  });

  const handleChange = (event) => {
    if (event.target != null) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    } else {
      setFormData({
        ...formData,
        pickUpDate: event,
        pickUptime: event,
      });
    }
  };

  function generateCustomId(prefix, pickDate) {
    const timestamp = format(pickDate, "ddMMyy");
    const randomPart = Math.floor(Math.random() * 10000);
    return `${prefix}-${timestamp}-${randomPart}`;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    var userData = {
      id: generateCustomId(formData.name, formData.pickUpDate),
      from: formData.from,
      to: formData.to,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      vType: formData.vType,
      pickUpDate: format(formData.pickUpDate, "dd/MM/yyyy"),
      pickUptime: format(formData.pickUpDate, "HH:mm"),
      isPickupCompleted: false,
    };
    set(ref(db, "bookings/" + userData.id), userData)
      .then(() => {
        setFormData({
          id: "",
          from: "",
          to: "",
          name: "",
          phoneNumber: "",
          vType: "Mini",
          pickUpDate: new Date(),
          pickUptime: new Date(),
        });
        ChildRef.current.handleOpen(
          "Your cab is bokked..!",
          "The assigned driver will contact you soon..!"
        );
      })
      .catch(() => {
        ChildRef.current.handleOpen("Something Went Wrong", "Pls Try Again");
      });
  };

  document.title = "CIAo Taxi";
  return (
    <section id="home">
      <div style={{ padding: 16, margin: "auto", maxWidth: 800 }}>
        <h2 style={{ textAlign: "center" }}>Book Your CIAo Ride</h2>
        <form onSubmit={handleSubmit}>
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
                    name="from"
                    onChange={handleChange}
                    value={formData.from}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    className={classes.form}
                    required
                    id="standard-basic2"
                    label="To"
                    name="to"
                    onChange={handleChange}
                    value={formData.to}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.form}
                    fullWidth
                    required
                    id="standard-basic3"
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.form}
                    fullWidth
                    required
                    id="standard-basic4"
                    label="Mobile Number"
                    name="phoneNumber"
                    type="number"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} style={{ marginTop: "20px" }}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Select your vehicle type
                    </FormLabel>
                    <RadioGroup
                      aria-label="vehicletype"
                      value={formData.vType}
                      type="radio"
                      name="vType"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value="Mini"
                        control={<Radio />}
                        label="Mini"
                      />

                      <FormControlLabel
                        value="Sedan"
                        control={<Radio />}
                        label="Sedan"
                      />

                      <FormControlLabel
                        value="XUV"
                        control={<Radio />}
                        label="XUV"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <DatePicker
                      fullWidth
                      margin="normal"
                      id="date-picker-dialog"
                      label="Pickup Date"
                      format="dd/MM/yyyy"
                      name="pickUpDate"
                      value={formData.pickUpDate}
                      onChange={handleChange}
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 10)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TimePicker
                      fullWidth
                      name="pickUptime"
                      margin="normal"
                      id="time-picker"
                      label="Pickup Time"
                      value={formData.pickUptime}
                      onChange={handleChange}
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
                type="submit"
              >
                Book Your Taxi
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
      <DialogBox ref={ChildRef} />
    </section>
  );
}
