import './App.css'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { NavProvider } from './components/Nav-context';
import AppRoutes from './components/App-routes';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavProvider>
          <Header />
          <AppRoutes/>
        </NavProvider>
      </BrowserRouter>

    </>
  );
};

export default App;