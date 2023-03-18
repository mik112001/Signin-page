import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../App.css";
import Otp from './OTPBox';

const theme = createTheme();

export default function Login() {
    const [loggedin, setLoggedin] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setLoggedin(true);
  };

  return (<>
  <ThemeProvider theme={theme}>
    {loggedin ? (
      <div>
        <Otp />
        <button style={{border:"none",width:"3vw", height:"9vh",color:"#0858F7",textAlign:"center",fontWeight:"700" ,paddingTop:"2vh"}} onClick={()=>{
          setLoggedin(false);
        }}> Back
        </button>
        <a style={{color:"#CACACE",marginLeft:"14vw",paddingTop:"2vh"}} href="#">Resend 00:10</a>
      </div>
     ):(
      <Container style={{"marginLeft":"19vw"}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
          }}
        >
          <Typography style={{marginLeft:"1px"}} component="h1" variant="h5">
          <h2>Welcome to <br/>Systempackage</h2>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div style={{display:"flex"}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
            />
            
            <select style={{height:"48px",marginTop:"20px",position:"absolute",marginLeft:"190px",width:"200px",zIndex:1,borderRadius:"12px"}}>
            <option>@heads.design</option>
            <option>@gmail.com</option>
            </select>
</div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            <Grid container>
              <Grid style={{
                    marginLeft:"140px",
                }} item xs>
                <Link  href="#" variant="body2">
                  Forgot your password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    
      </Container>
    )}
    </ThemeProvider>
    </>
  );
}