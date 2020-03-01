import React from 'react';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

const theme = createMuiTheme({
  /* theme for v1.x */
 });


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div>
 <NavBar />
 <Search />
  </div>
  </MuiThemeProvider>
  );
}

export default App;
