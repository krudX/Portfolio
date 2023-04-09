import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/Contact/contact.component';
import Footer from './routes/footer/footer.component';
import './App.css';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
