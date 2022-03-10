import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage";
const AddNewMovie = lazy(() => import("./pages/AddNewMovie"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addMovie" element={<AddNewMovie />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
