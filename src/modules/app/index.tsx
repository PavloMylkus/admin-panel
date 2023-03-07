import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as Styled from './app.styled';
import { MainRouter } from '../navigation';
import { PermanentDrawerLeft } from '../common/components/PermanentDrawerLeft/PermanentDrawerLeft.component';
// import theme from '../theme';

const theme = createTheme({
	typography: {
		fontFamily: 'Poppins, sans-serif',
	  },
  });

const queryClient = new QueryClient({
	defaultOptions: {
	  queries: {
		keepPreviousData: true,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		cacheTime: Infinity
	  }
	}
  });

const App = () =>{
  return (
  <ThemeProvider theme={theme}>
	<Styled.GlobalStyles/>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<PermanentDrawerLeft >
					<MainRouter/>
				</PermanentDrawerLeft>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
  </ThemeProvider>
  );
}

export default App;
