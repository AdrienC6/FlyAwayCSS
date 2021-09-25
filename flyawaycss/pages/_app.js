import '../styles/flyaway.scss';
import '../styles/app.scss';
import Soc from '../styles/soc.js';
import App from '../styles/app.js';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  Soc();
  App();
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
