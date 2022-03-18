import React, {useState} from "react"
import { useDispatch } from "react-redux";
import {Avatar,Typography, Button, Paper, Grid, Container} from '@material-ui/core';
import useStyle from "./style";
import Input from "../Auth/input"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link, useHistory} from 'react-router-dom';
import { adminlogin } from "../../Action/auth";

const initialState = {email:'',password:''};

const Admin = () =>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const [formData,setFormData] = useState(initialState);
    const [showPassword,setShowPassword] = useState(false);
    const history = useHistory();

    const handleShowPassword=()=> setShowPassword((prevShowPassword)=> !prevShowPassword)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(adminlogin(formData, history))
    }

    return(
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Admin Login</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <>            
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />      
                    </>
                
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign in
                </Button>
                <Button component={Link} to='/Auth'>
                        User Login
                    </Button>

            </form>
        </Paper>
        </Container>
    )
}

export default Admin;