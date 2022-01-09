import { useRoutes } from 'react-router-dom';
import './App.css';
import { route } from './routes/route-map';
function App() {
  const elements = useRoutes(route);
  return (
    <div className='App'>
      <div className='App'>
        {elements}
      </div>;
    </div>
  );
}
export default App;
