import { useRoutes } from 'react-router-dom';
import './stylesheets/App.scss';
import { route } from './routes/route-map';
function App() {
  const elements = useRoutes(route);
  console.log("🚀 ~ file: App.tsx ~ line 6 ~ App ~ elements", elements)



  
  return (
    <div className='App'>
        {elements}
    </div>
  );
}
export default App;
