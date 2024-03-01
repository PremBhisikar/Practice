import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({ name: "", email: "", password: "" })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth={400}
                    alignItems="center"
                    justifyContent="center"
                    margin="auto"
                    marginTop={10}
                    padding={10}
                    borderRadius={5}
                    boxShadow={12}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px ",
                        },
                    }}
                >
                    <Typography variant='h2' padding={3} textAlign={'center'} >
                        {isSignup ? "Signup" : "Login"} </Typography>
                    {isSignup && (
                        <TextField name='name'
                            onChange={handleChange}
                            value={input.name}
                            margin='normal'
                            type='text'
                            variant='outlined'
                            placeholder='Name'
                        />)}
                    <TextField name='email'
                        onChange={handleChange}
                        value={input.email}
                        margin='normal'
                        type='email'
                        variant='outlined'
                        placeholder='Emai'
                    />
                    <TextField name='password'
                        value={input.password}
                        onChange={handleChange}
                        margin='normal'
                        type='password'
                        variant='outlined'
                        placeholder='Password'
                    />
                    <Button type='submit' sx={{ marginTop: 3, borderRadius: 3 }} variant='contained' color='warning'>
                        {isSignup ? "Signup" : "Login"}</Button>
                    <Button onClick={resetState}
                        sx={{ marginTop: 3, borderRadius: 3 }} >
                        Change to {isSignup ? "Login" : "Signup"}</Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth