import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

function App() {
  const location = useLocation();

  useScrollReveal(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
