import { useState, useCallback } from "react";
import Frame3 from "../components/Frame3";
import PortalPopup from "../components/PortalPopup";
import "./Frame2.css";

const Frame2 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="div18">
        <img className="icon4" alt="" src="/@2x.png" />
        <img className="icon5" alt="" src="/2@2x.png" />
        <div className="div19">
          <div className="child1" />
          <div className="child2" />
        </div>
        <b className="e-mail2">E-mail</b>
        <b className="b11">Пароль</b>
        <b className="b12">Авторизація</b>
        <b className="b13">{`Немає аккаунта? `}</b>
        <div className="div20">
          <div className="div21" />
          <b className="b14">Продовжити</b>
        </div>
        <div className="div22">
          <div className="div21" />
          <b className="b14">Постачальник</b>
        </div>
        <div className="div24">
          <div className="div21" />
          <b className="b14">Менеджер</b>
        </div>
        <b className="b17" onClick={openFrame}>
          Реєстрація
        </b>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame3 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame2;
