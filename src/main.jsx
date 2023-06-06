import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import Hero from './components/Hero.jsx'
import Tel from './components/Tel.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Info from './components/Info.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/tel",
        element : <Tel />
      }
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
