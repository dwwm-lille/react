import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar title="React Router" />

      <Outlet />
    </div>
  );
}

export default App;
