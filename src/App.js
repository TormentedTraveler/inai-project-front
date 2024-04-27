import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CartList from './components/cart_list/CartList';
import AddPerson from './pages/AddPerson';
import RecognitionDemonstration from './pages/RecognitionDemonstration';
function App() {

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/cards' element={<CartList/>} />
            <Route path='/addPerson' element={<AddPerson/>} />
            <Route path='/demonstration' element={<RecognitionDemonstration/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
