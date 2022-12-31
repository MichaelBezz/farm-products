import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GlobalStyle} from './styles';
import ScrollToTop from '../ui/scroll-to-top/scroll-to-top';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import MainPage from '../pages/main-page/main-page';
import OrderPage from '../pages/order-page/order-page';
import {AppRoute} from '../../constants';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage />}
            />
          </Route>
          <Route path='*' element={<div>404/Not found.</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
