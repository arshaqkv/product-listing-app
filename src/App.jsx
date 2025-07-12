import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
