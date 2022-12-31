import Header from '../header/header';
import Footer from '../footer/footer';
import {Outlet} from 'react-router-dom';

function PageWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageWrapper;
