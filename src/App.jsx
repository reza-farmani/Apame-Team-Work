import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import About from './pages/About';
import Product from './pages/Product';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import Service from './ui/Service';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Print from './ui/Print';
import Offset from './features/prints/Offset';
import Web from './ui/Web';
import SocialMedia from './ui/SocialMedia';
import Board from './ui/Board';
import Lazer from './features/board/Lazer';
import Graphic from './ui/Graphic';
import Shooting from './ui/Shooting';
import Cut from './features/board/Cut';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/print-services" element={<Print />} />
            <Route path="/offset-services" element={<Offset />} />
            <Route path="/web-design" element={<Web />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/board" element={<Board />} />
            <Route path="/lazer-services" element={<Lazer />} />
            <Route path="/cut-services" element={<Cut />} />
            <Route path="/graphic-design" element={<Graphic />} />
            <Route path="/photography" element={<Shooting />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
