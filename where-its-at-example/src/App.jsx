import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'

import Events from './views/Events';
import Buy from './views/Buy';
import Confirmation from './views/Confirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Events />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
  }
]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
