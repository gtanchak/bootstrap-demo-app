import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ModalA, ModalB } from "src/components";
import Home from "src/pages/home";

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
