import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import RootLayout from './Components/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <PageOne />},
        {path: '/2', element: <PageTwo />}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;
