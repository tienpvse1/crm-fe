import { useRoutes } from 'react-router-dom';
import './stylesheets/App.scss';
import { route } from './routes/route-map';
function App() {
  const elements = useRoutes(route);

  return <div className='App'>{elements}</div>;
}
export default App;
