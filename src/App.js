import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
