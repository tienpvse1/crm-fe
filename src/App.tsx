import { useRoutes } from 'react-router-dom';
import { route } from './routes/route-map';
import './App.css';

function App() {
  const elements = useRoutes(route);
  return (
    <div className='App'>
      {elements}
    </div>
  );
}

export default App;
