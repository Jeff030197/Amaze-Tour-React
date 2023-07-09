import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from './../Components/SearchBar';
import Adjustments from './../Components/Adjustments';


const Item = styled(Paper)(({ theme }) => ({
       backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
       ...theme.typography.body2,
       padding: theme.spacing(1),
       textAlign: 'center',
       color: theme.palette.text.secondary,
}));

// API Integration for search box 
// import {Container, Row} from 'react-bootstrap'
const cards2 = () => {
       return (
              <Container>
              <React.Fragment>
                     <CssBaseline />
                     <Container fixed>
                            <Grid container spacing={2}>
                                   <Grid item xs={12} >
                                          <Item><SearchBar></SearchBar></Item>
                                   </Grid>

                                   <Grid item xs={12}>
                                          <Item><Adjustments></Adjustments></Item>
                                   </Grid>

                            </Grid>
                     </Container>
              </React.Fragment>
              </Container>

       );
}

export default cards2;