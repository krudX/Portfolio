import { Fragment, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import './App.css';

function App() {

  const containerRef = useRef(null)

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
