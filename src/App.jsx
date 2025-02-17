import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/defaultLayout/defaultLayout";

// * import pages
import HomePage from "./assets/pages/HomePage";
import MenuPage from "./assets/pages/MenuPage";
import OrderPage from "./assets/pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/menu" Component={MenuPage} />
          <Route path="/ordina" Component={OrderPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
