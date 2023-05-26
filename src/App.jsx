import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="calculator" element={<Calculator />} />
        <Route
          path="*"
          element={
            <div style={{ fontSize: '30px', marginTop: '20px' }}>
              Not Found Path
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
