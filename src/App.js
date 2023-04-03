import './style/App.css';

import HomePage from './components/HomePage';
import ThemeProvider from './providers/Theme';
import HttpHerosProvider from './providers/Provider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HttpHerosProvider>
            <HomePage />
        </HttpHerosProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
