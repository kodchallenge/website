import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout'
import AboutPage from './pages/AboutPage';
import MainPage from './pages/main/MainPage';
import TrackListPage from './pages/TrackListPage';
import ProblemListPage from './pages/ProblemListPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<MainPage />} />
            <Route path='tracks' element={<TrackListPage />}/>
            <Route path='problem' element={<ProblemListPage />}/>
            <Route path='problem/:id' element={<ProblemDetailPage />}/>
            <Route path='about-project' element={<AboutPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;