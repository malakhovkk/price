// import { useStore } from "../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "../InputLogin";
import "./FormLogin";
import { IP } from "../constants/vars";
import { usePrice } from "../store/store";

export const FormLogin = () => {
  // const { setFInfo, FInfo } = useStore();
  // const navigate = useNavigate();
  const { loginInfo, setLoginInfo, data, setData } = usePrice();
  const save = (e) => {
    e.preventDefault();
    axios
      .post(`${IP}/api/logon`, loginInfo)
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        localStorage.setItem("login1", response.data.user.login);
        localStorage.setItem("token1", response.data.result);
        // navigate("/vendors");
        return;
      })
      .catch((error) => {
        console.warn(error);
        alert("Ошибка");
        // navigate("/vendors");
      });
  };

  const press = (E) => {
    E.preventDefault();
    setData();
  };

  return (
    <form onSubmit={save}>
      <h3>Логин</h3>
      {data}
      <button onClick={press}>OK </button>
      <InputLogin type="text" name="login" place="Введите логин" />
      <h3>Пароль</h3>
      <InputLogin type="password" name="password" place="Введите пароль" />
      <button type="submit" style={{ padding: "20px 124px" }}>
        Войти
      </button>
    </form>
  );
};
