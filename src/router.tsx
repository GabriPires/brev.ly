import { createBrowserRouter, Outlet } from 'react-router-dom'
import { HomePage } from './pages/home'
import { ShortedUrlPage } from './pages/shorted-url'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="min-h-svh flex flex-col items-center px-3">
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:shortUrl',
        element: <ShortedUrlPage />,
      },
    ],
  },
])
