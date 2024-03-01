import React, { useState } from 'react'
import { AppBar, Box, Button, Card, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material'
const Test = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState();
  const [input, setInput] = useState({
    name: '',
    email: "",
    password: "",
    subscription: "",
    age: 0,
    gender: ''
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
  }
  return (

    <div>
      <AppBar>
        <Toolbar>
          <Typography>Logo</Typography>

          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            indicatorColor='secondary'
            textColor='inherit'

          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>

          <Button
            variant="contained"
            sx={{ marginLeft: 'auto' }}
            color='warning'
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ margin: 10 }}>
        <Card sx={{ padding: 10 }}>
          <form onSubmit={handleSubmit} >
            <Typography variant='h5'>Hello World</Typography>
            <Button onClick={() => alert('button Clicked')}
              variant="text">Text</Button>
            <Button onClick={() => alert('button Clicked')}
              variant="contained">Contained</Button>
            <Button onClick={() => alert('button Clicked')}
              variant="outlined">Outlined</Button>
            <Button onClick={() => alert('button Clicked')}
              color="secondary">Secondary</Button>
            <Button onClick={() => alert('button Clicked')}
              variant="contained" color="success">
              Success
            </Button>
            <Button onClick={() => alert('button Clicked')}
              variant="outlined" color="error">
              Error
            </Button>
            <Button onClick={()=> setOpen(true)}>Dialog</Button>
            <Dialog open={open} onClose={() => { setOpen(false) }}>
              <DialogTitle>This is Dialog</DialogTitle>
              <DialogContent>
                <DialogContentText>This contains dummy data text and other information</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=> setOpen(false)}>Agree</Button>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>

              </DialogActions>

            </Dialog>
            <Box sx={{ margin: 5 }}>
              <TextField
                value={input.name}
                name='name'
                onChange={handleChange}
                sx={{ margin: 3 }}
                label="Name"
                type='name'
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name='email'
                value={input.email}
                sx={{ margin: 3 }}
                type='email'
                label="Email"
                variant="outlined" />
              <TextField
                sx={{ margin: 3 }}
                onChange={handleChange}
                name='password'
                value={input.password}
                type='password'
                label="Password"
                variant="outlined" />
            </Box>
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() =>
                        setInput((prev) => ({
                          ...prev,
                          subscription: !input.subscription,
                        }))
                      }
                    />
                  }
                  label="Checked" />
              </FormGroup>

              <FormControl fullWidth>
                <InputLabel >Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={input.age}
                  label="Age"
                  onChange={handleChange}
                  name='age'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel >Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  onChange={handleChange}
                  value={input.gender}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Box>


            <Button type='submit'>
              Submit
            </Button>


          </form>
        </Card>
      </Box>
    </div>

  )
}

export default Test