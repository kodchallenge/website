import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Router from './routes/Router';
import { getAllTrack } from './store/actions/trackActions';

function App() {
  const dispatch = useDispatch()
  const { pathname } = useLocation();

  useEffect(() => {
    //Base Configures
    dispatch(getAllTrack())
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;