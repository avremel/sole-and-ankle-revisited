import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { ThemeProvider } from 'styled-components';
import { COLORS } from '../../constants';

const theme = {
  phone: `37.5rem`,
  tablet: `59.375rem`,
  laptop: `81.25rem`,
};

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

const Wrapper = styled.div`
  --white: hsl(0deg 0% 100%);
  --gray100: hsl(185deg 5% 95%);
  --gray300: hsl(190deg 5% 80%);
  --gray500: hsl(196deg 4% 60%);
  --gray700: hsl(220deg 5% 40%);
  --gray900: hsl(220deg 3% 20%);
  --primary: hsl(340deg 65% 47%);
  --secondary: hsl(240deg 60% 63%);
`;

export default App;
