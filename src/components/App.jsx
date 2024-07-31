import { useRoutes } from 'react-router-dom';
import routes from '../routes.jsx';

function App() {
    let element = useRoutes(routes);
    return(
        <div className='container'>
            {element}
        </div>
    )
}

export default App;

