import './App.css';
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './Components/Home';
import BlogDetail from './Components/BlogDetail';
import NotFound from './Components/NotFound'

function App() {
  return (
    <Routes>
      <Route exact path='/blogdetail/:id' element={<BlogDetail />} />
      <Route exact path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
