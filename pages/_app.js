import Layout from "../components/layout";
import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
