import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
