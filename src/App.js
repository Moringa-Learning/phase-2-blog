import './App.css';
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './Components/Home';
import BlogDetail from './Components/BlogDetail';
import NotFound from './Components/NotFound'
import BlogCreate from './Components/BlogCreate';
import Navigationbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navigationbar />
    <Routes>
        <Route exact path='/phase-2-blog//blogdetail/:id' component={<BlogDetail />} />
        <Route exact path='/phase-2-blog//postblog' component={<BlogCreate />} />
        <Route exact path='/phase-2-blog/' component={<Home />} />
        <Route path='*' component={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
