import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>React Router</h1>

      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/a-propos">A propos</Link></li>
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
