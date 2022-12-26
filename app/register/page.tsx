import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <>
      <div className="regContainer">
        <Image
          className="doggy"
          src="/doggy.svg"
          alt=""
          width={400}
          height={400}
        />
        <Image
          className="craftypug-doggy"
          src="/craftypug.png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="absolute top-4 left-8"
          src="/UM-logo.png"
          alt=""
          width={80}
          height={80}
        />
        <div>
          <h1 className="absolute text-2xl text-[#2D2D2D] top-28 left-8">
            Create an account
          </h1>
        </div>
        <form action="#">
          <div>
            <input
              className="reg-inputText"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="reg-inputText mt-16"
              type="text"
              placeholder="Lastname"
            />
            <input
              className="reg-inputUser"
              type="text"
              placeholder="Username"
            />
            <input
              className="reg-inputUser mt-16"
              type="text"
              placeholder="Password"
            />
            <div className="flex items-center mb-4 mt-[434px] ml-10">
              <input
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                id="account-cashier"
                type="radio"
                name="accounts"
                value="Cashier"
                aria-labelledby="account-cashier"
                aria-describedby="account-cashier"
                checked
              />
              <label
                className="text-sm font-medium text-gray-900 ml-2 block"
                htmlFor="account-cashier"
              >
                Cashier
              </label>
            </div>
            <div className="flex items-center mb-4 ml-10">
              <input
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                id="account-admin"
                type="radio"
                name="accounts"
                value="Admin"
                aria-labelledby="account-admin"
                aria-describedby="account-admin"
              />
              <label
                className="text-sm font-medium text-gray-900 ml-2 block"
                htmlFor="account-admin"
              >
                Admin
              </label>
            </div>
            <div className="mt-6">
              <input className="reg-inputDone" type="button" value="Done" />
              <Link href="/">
                <input className="reg-inputBack" type="button" value="Back" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
