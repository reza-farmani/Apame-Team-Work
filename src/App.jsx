import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import Offset from './features/prints/Offset';
import Lazer from './features/board/Lazer';
import Cut from './features/board/Cut';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import Order from './pages/Order';
import VisitCard from './features/prints/offsetsub/VisiteCard';
import Digitalp from './features/prints/Digitalp';
import Sublimission from './features/prints/Sublimission';
import AfterPrint from './features/prints/AfterPrint';
import WebDesign from './features/web/WebDesign';
import Seo from './features/web/Seo';
import Youtube from './features/socialmedia/Youtube';
import Instagram from './features/socialmedia/Instagram';
import PhotoGraphy from './features/shooting/PhotoGraphy';
import SubFrame from '../orderform/prints/sublimition/SubFrame';
import SubPuzzle from '../orderform/prints/sublimition/SubPuzzel';
import SubGlass from '../orderform/prints/sublimition/SubGlass';
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
            <Route path="/offset-services" element={<Offset />} />
            <Route path="/visitcard" element={<VisitCard />} />
            <Route path="/digprint-services" element={<Digitalp />} />
            <Route path="/sublimition-services" element={<Sublimission />} />
            <Route path="/after-printing" element={<AfterPrint />} />
            <Route path="/webdesign-services" element={<WebDesign />} />
            <Route path="/seo-services" element={<Seo />} />
            <Route path="/youtube-services" element={<Youtube />} />
            <Route path="/instagram-services" element={<Instagram />} />
            <Route path="/photography-services" element={<PhotoGraphy />} />
            <Route path="/lazer-services" element={<Lazer />} />
            <Route path="/subframe-form" element={<SubFrame />} />
            <Route path="/subpuzzle-form" element={<SubPuzzle />} />
            <Route path="/subglass-form" element={<SubGlass />} />
            <Route path="/cut-services" element={<Cut />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
