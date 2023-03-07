import { createTheme } from '@mui/material/styles';
export * from './colors.const';
export * from './mui.const';
export * from './width.const';



const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    // You can also customize other typography settings such as fontSize, fontWeight, etc. here.
  },
});

export default theme;