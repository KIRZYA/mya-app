import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Main from './pages/Main.jsx'
import NoPage from './pages/NoPage.jsx'



createRoot(document.getElementById('root')).render(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="main" element={<Main />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>,
 )
