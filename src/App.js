import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(navigation);
  }, [navigation]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {navigation.state === "loading" && (
        <h1>
          Loading{" "}
          {navigation.location.pathname === "/" && <strong>Homepage</strong>}{" "}
        </h1>
      )}
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
