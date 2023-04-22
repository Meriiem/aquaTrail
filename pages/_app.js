import "../styles/globals.css";

//IMPORT INTERNALLY
import { TrackingProvider } from "../Context/TrackingContext";
import { NavBar, Footer } from "../Components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />;
      </TrackingProvider>
      <Footer />
    </>
  );
}
