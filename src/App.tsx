import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from "@/components/Layout/MainLayout/MainLayout"
import HomePage from "@/pages/HomePage"
import SignInPage from "@/pages/SignInPage"
import SidebarLayout from "@/components/Layout/SidebarLayout/SidebarLayout"
import ProfilePage from "@/pages/ProfilePage"

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Route>
          <Route element={<SidebarLayout />}>
            <Route path="/profile" element={<ProfilePage />} />

          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover
        theme="light"
      />
    </>

  )
}

export default App
