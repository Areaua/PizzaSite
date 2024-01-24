import "./Frame.css";

const Frame = () => {
  return (
    <div className="div">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />
      <div className="div1">
        <div className="child" />
        <div className="item" />
      </div>
      <b className="e-mail">E-mail</b>
      <b className="b">Пароль</b>
      <b className="b1">Авторизація</b>
      <div className="div2">
        <div className="div3" />
        <b className="b2">Продовжити</b>
      </div>
      <div className="div4">
        <div className="div3" />
        <b className="b2">Постачальник</b>
      </div>
      <div className="div6">
        <div className="div3" />
        <b className="b2">Клієнт</b>
      </div>
    </div>
  );
};

export default Frame;
