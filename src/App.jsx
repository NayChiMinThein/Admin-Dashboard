import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/lists/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import ProductLists from "./pages/lists/ProductLists";
import { userInputs, productInputs } from "./formSource"
import { useDarkMode } from "./darkMode/DarkModeProvider";
import { ThemeProvider, createTheme } from "@mui/material";

export default function App() {
  const {darkMode} = useDarkMode()

  const theme = createTheme({
    palette:{
      mode: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<ProductLists/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}