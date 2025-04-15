import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import VoucherScreen from './components/Vouchers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/vouchers" element={<VoucherScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
