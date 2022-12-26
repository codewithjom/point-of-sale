import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="form-container login-container">
          <form action="#">
            <div className="px-[128px] pt-[90px]">
              <Image src="/craftypug.png" alt="" width={200} height={200} />
              <input
                className="login-inputText"
                type="text"
                placeholder="Username"
              />
              <input
                className="login-inputPass"
                type="password"
                placeholder="Password"
              />
              <input className="input-button-log" type="button" value="Login" />
              <Link href="./register">
                <input
                  className="input-button-reg"
                  type="button"
                  value="Register"
                />
              </Link>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel">
              <Image src="/UM-logo.png" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
