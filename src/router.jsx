import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Competitions from './pages/Competitions.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import LiveMatches from './pages/LiveMatches.jsx';
import PoolTables from './pages/PoolTables.jsx';
import RestaurantBBQ from './pages/RestaurantBBQ.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'pool-tables',
        element: <PoolTables />,
      },
      {
        path: 'restaurant-bbq',
        element: <RestaurantBBQ />,
      },
      {
        path: 'live-matches',
        element: <LiveMatches />,
      },
      {
        path: 'competitions',
        element: <Competitions />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
