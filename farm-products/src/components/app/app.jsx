import {GlobalStyle} from './styles';
import Header from '../layout/header/header';
// import MainPage from '../pages/main-page/main-page';
import OrderPage from '../pages/order-page/order-page';
import Footer from '../layout/footer/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <MainPage /> */}
      <OrderPage />
      <Footer />
    </>
  );
}

export default App;
