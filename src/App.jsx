import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { CitiesProvider, useCities } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

// const BASE_URL = `http://localhost:8000`;
function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(function () {
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(`${BASE_URL}/cities`);
  //       const data = await response.json();
  //       setCities(data);
  //     } catch {
  //       alert("There was an error loading data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCities();
  // }, []);
  return (
    <>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
