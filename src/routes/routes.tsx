import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "src/pages/home";
import ModalA from "src/pages/modalA";
import ModalB from "src/pages/modalB";

const AppRoutes: FC = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Routes location={background || location}>
      <Route path='/' element={<Home />}>
        <Route path='modalA' element={<ModalA />} />
        <Route path='modalB' element={<ModalB />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
