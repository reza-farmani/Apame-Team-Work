import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import Service from './ui/Service';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Offset from './features/prints/Offset';
import Lazer from './features/board/Lazer';
import Cut from './features/board/Cut';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import OrderForm from './pages/Order';
//import Print from './ui/Print';
//import Web from './ui/Web';
//import SocialMedia from './ui/SocialMedia';
//import Board from './ui/Board';
//import Graphic from './ui/Graphic';
//import Shooting from './ui/Shooting';

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/service" element={<Service />} />
            <Route path="/offset-services" element={<Offset />} />
            <Route path="/lazer-services" element={<Lazer />} />
            <Route path="/cut-services" element={<Cut />} />
            <Route path="/order" element={<OrderForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
