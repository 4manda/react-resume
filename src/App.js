import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Resume from './components/resume/Resume';

const App = props => {
  return (
    <div className="main">
      <Resume />
    </div>
  );
}

export default App;
