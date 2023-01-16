import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeProvider/ThemeProvider';
import { router } from './Routes/Routes/Routes'

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div data-theme={`${darkTheme ? "dark" : "light"}`} className="h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
