import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, Fragment, useContext, useState } from "react";
import { typeData } from "../components/Data";
import { DataContext } from "../components/Context";
import { IData } from "../components/Data";
import { v4 as uuidv4 } from "uuid";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Image } from "@mui/icons-material";

interface State extends SnackbarOrigin {
  open: boolean;
}
export function AddCardPage() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const SnackBarClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [type, setType] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState("");

  const { cards, setCard } = useContext(DataContext);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      cardNumber !== "" &&
      type !== "" &&
      expiryDate !== ""
    ) {
      if (cardNumber.length !== 16) {
        return alert("cardNumber maydoni 16 ta sonlardan iborat bolishi kerak");
      }

      if (expiryDate.length !== 4 && Number(cardNumber) !== null) {
        return alert("ExpiryDate 4 ta sondan ibor bolishi kerak");
      }
      const newCard: IData = {
        firstName,
        lastName,
        cardNumber,
        type,
        expiryDate,
        id: uuidv4(),
      };
      setCard([...cards, newCard]);
      alert("karta muvafaqiyatli qoshildi");
    } else {
      alert("hamma  maydonni togri  toldiring");
    }
  }
  function handleCancel() {
    setFirstName("");
    setLastName("");
    setCardNumber("");
    setType("");
    setExpiryDate("");
  }
  return (
    <Fragment>
      <Typography className="font-bold mt-5" variant="h4" gutterBottom>
        Add new Card
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit eveniet?
      </Typography>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        noValidate
        className="mb-3"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              fullWidth
              id="cardNumber"
              label="Card Number"
              name="cardNumber"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Select
              value={type}
              autoFocus
              onChange={(e) => setType(String(e.target.value))}
              fullWidth
              name="type"
            >
              {typeData.map((t, index) => (
                <MenuItem key={index} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              required
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              id="expiryDate"
              label="Expiry Date"
              name="expiryDate"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={handleCancel}
              className="flex-1"
              fullWidth
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              className="flex-1"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography className="mt-4 " color="inherit">
        By providing your card information, you allow us to charge your card for
        future payment in accordance with their terms.
      </Typography>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Fragment>
  );
}
