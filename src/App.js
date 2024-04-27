import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MissingPeople from './pages/MissingPeaple/MissingPeople';
import CartList from './components/Card_list/CardList';
function App() {

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/cards' element={<MissingPeople/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
