import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import {Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Pages from './pages/Pages';


export default function App() {

  return (
    <div>
      <Routes>
      <Route path="/cons"/>
      <Route path="/pages" element={<Pages/>}/>
      <Route path="/faq" element={<FAQ/>}/>      
      <Route path="/" exact element={<MAIN/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
    </div>
  )
}
