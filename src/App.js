import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigation = useNavigation();
  const user = useLoaderData();

  // console.log(user);

  useEffect(() => {
    // console.log(navigation);
  }, [navigation]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {/* {navigation.state === "loading" && (
        <h1>
          Loading{" "}
          {navigation.location.pathname === "/" && <strong>Homepage</strong>}{" "}
        </h1>
      )} */}
      <div className="flex-fill">
        <Outlet context={{ user }} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
