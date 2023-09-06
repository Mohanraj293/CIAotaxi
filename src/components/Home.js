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
  form: {
    "& .MuiInputBase-input": {
      color: "black", // Change the text color here
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#4B1E8F", // Change the underline color when focused
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#4B1E8F", // Label text color when focused
    },
  },
  form1: {
    "& .MuiInputBase-input": {
      color: "black", // Change the text color here
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00a884", // Change the underline color when focused
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#00a884", // Label text color when focused
    },
  },
  card1: {
    border: "2px solid #4B1E8F",
  },
  card2: {
    border: "2px solid #00a884",
  },
}));

export default function Home() {
  const ChildRef = useRef();
  const classes = useStyles();

  const [isCab, setIscab] = useState(true);
  const [variant, setVariant] = useState("contained");
  const [variant1, setVariant1] = useState("outlined");

  const handleVariant = () => {
    setIscab(true);
    setVariant("contained");
    setVariant1("outlined");
  };

  const handleVariant1 = () => {
    setIscab(false);
    setVariant1("contained");
    setVariant("outlined");
  };
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
      vType: isCab ? formData.vType : "Call Driver",
      pickUpDate: format(formData.pickUpDate, "dd/MM/yyyy"),
      pickUptime: format(formData.pickUpDate, "HH:mm"),
      isPickupCompleted: false,
      takeRide: 0,
      createdAt: format(new Date(), "dd/MM/yyyy HH:mm"),
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
          takeRide: 0,
        });
        ChildRef.current.handleOpen(msgTitle, msgDesc);
      })
      .catch(() => {
        ChildRef.current.handleOpen("Something Went Wrong", "Pls Try Again");
      });
  };

  document.title = "CIAo Taxi";

  const btnContained = {
    background: "#4B1E8F",
    color: "white",
  };

  const btnOutlined = {
    borderColor: "#4B1E8F",
    color: "#4B1E8F",
  };

  const btnContained1 = {
    background: "#00a884",
    color: "white",
  };

  const btnOutlined1 = {
    borderColor: "#00a884",
    color: "#00a884",
  };

  const msgTitle = isCab
    ? "Your cab is booked now..!"
    : "Your call driver is booked now..!";
  const msgDesc = isCab
    ? "Assigned cab driver will contact you soon..!"
    : "Assigned call driver will contact you soon..!";
    
  return (
    <section id="home" className="home">
      <div style={{ padding: 16, margin: "auto", maxWidth: 800 }}>
        <h2 style={{ textAlign: "center" }}>Book Your Cab and Call Driver</h2>
        <Grid container spacing={2} className="d-flex justify-content-center">
          <Grid item>
            <Button
              variant={variant}
              onClick={handleVariant}
              style={isCab ? btnContained : btnOutlined}
            >
              CIAo cab
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={variant1}
              onClick={handleVariant1}
              style={!isCab ? btnContained1 : btnOutlined1}
            >
              Call Driver
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Card
            className={isCab ? classes.card1 : classes.card2}
            variant="outlined"
            style={{ marginTop: "20px" }}
          >
            <CardContent>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={isCab ? classes.form : classes.form1}
                    fullWidth
                    required
                    id="standard-basic3"
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    className={isCab ? classes.form : classes.form1}
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
                    className={isCab ? classes.form : classes.form1}
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
                    className={isCab ? classes.form : classes.form1}
                    fullWidth
                    required
                    id="standard-basic4"
                    label="Mobile Number"
                    name="phoneNumber"
                    type="number"
                    pattern="[0-9]{10}"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Enter 10 digit number")
                    }
                  />
                </Grid>
                {isCab && (
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
                          control={<Radio style={{ color: "#4B1E8F" }} />}
                          label="Mini"
                        />

                        <FormControlLabel
                          value="Sedan"
                          control={<Radio style={{ color: "#4B1E8F" }} />}
                          label="Sedan"
                        />

                        <FormControlLabel
                          value="XUV"
                          control={<Radio style={{ color: "#4B1E8F" }} />}
                          label="XUV"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <DatePicker
                      className={
                        isCab ? classes.customDatePicker : classes.form1
                      }
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
                      className={
                        isCab ? classes.customDatePicker : classes.form1
                      }
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
                style={{
                  width: "550px",
                  margin: "0 auto",
                  display: "flex",
                  backgroundColor: isCab ? "#4B1E8F" : "#00a884",
                  color: "white",
                }}
                size="large"
                variant="contained"
                type="submit"
              >
                {isCab ? "Book Your Taxi" : "Book your Driver"}
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
      <DialogBox ref={ChildRef} />
    </section>
  );
}
