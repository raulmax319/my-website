import React from 'react';

import { About, Home } from '~/ui/pages';
import { NavBar } from '~/ui/pages/components';

const App: React.FC = () => (
  <>
    <NavBar />
    <Home />
    <About />
  </>
);

export default App;
