import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout'
import TrackListPage from './pages/TrackListPage';
function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='tracks' element={<TrackListPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;