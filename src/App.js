import React, { useState } from "react";

import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Typography,
  Box,
  Paper,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation
  const validate = () => {
    let temp = {};

    if (!formData.name) temp.name = "Name is required";

    if (!formData.email)
      temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Invalid Email";

    if (!formData.password)
      temp.password = "Password is required";
    else if (formData.password.length < 6)
      temp.password = "Min 6 characters";

    if (!formData.gender)
      temp.gender = "Select gender";

    if (!formData.agree)
      temp.agree = "Accept terms first";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("🎉 Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        agree: false,
      });

      setErrors({});
    }
  };

  return (

    // Gradient Background
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">

        {/* Card */}
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            background:
              "linear-gradient(145deg, #ffffff, #f3f4f6)",
          }}
        >

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#4f46e5",
            }}
          >
            Registration Form
          </Typography>

          <Typography
            align="center"
            sx={{ mb: 3, color: "gray" }}
          >
            Please fill all details carefully
          </Typography>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6366f1",
                  },
                },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#22c55e",
                  },
                },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#f97316",
                  },
                },
              }}
            />

            {/* Gender */}
            <FormControl
              margin="normal"
              error={Boolean(errors.gender)}
            >
              <FormLabel sx={{ color: "#4f46e5" }}>
                Gender
              </FormLabel>

              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />

                <FormControlLabel
                  value="female"
                  control={<Radio color="secondary" />}
                  label="Female"
                />
              </RadioGroup>

              <Typography
                color="error"
                variant="caption"
              >
                {errors.gender}
              </Typography>

            </FormControl>

            {/* Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  color="success"
                />
              }
              label="I agree to Terms & Conditions"
            />

            <Typography
              color="error"
              variant="caption"
              display="block"
            >
              {errors.agree}
            </Typography>

            {/* Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={!formData.agree}
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "30px",
                background:
                  "linear-gradient(to right, #6366f1, #22c55e)",
                transition: "0.3s",

                "&:hover": {
                  background:
                    "linear-gradient(to right, #22c55e, #6366f1)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Submit
            </Button>

          </form>

        </Paper>
      </Container>
    </Box>
  );
}

export default App;
