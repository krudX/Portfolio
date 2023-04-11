import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/Projects/projects.component';
import Contact from './routes/Contact/contact.component';
import ProjectDetails from './routes/ProjectDetails/projectDetails.component';
import Footer from './routes/footer/footer.component';
import Terms from './routes/Terms/terms.component';
import './App.css';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:projectId' element={<ProjectDetails />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/terms' element={ <Terms /> }></Route>
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
