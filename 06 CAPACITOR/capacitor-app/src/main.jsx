import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Login from "./components/Login.jsx"
import Dashboard from './components/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Login />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="*"
          element = {
            <div>
              <p>
                  There is nothing here
              </p>
              <NavLink to="/">Back Home</NavLink>
          </div>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
