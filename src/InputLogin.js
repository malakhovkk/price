import { useEffect, useState } from "react";
import { usePrice } from "./store/store";

export const InputLogin = ({ type, name, place }) => {
  const { loginInfo, setLoginInfo } = usePrice();
  console.log(">>>", name, loginInfo[name]);
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <input
      type={type}
      name={name}
      class="inp"
      placeholder={place}
      value={loginInfo[name]}
      onChange={(e) => {
        console.log(e.target.value);
        setLoginInfo({ ...loginInfo, [name]: e.target.value });
      }}
    />
  );
};
