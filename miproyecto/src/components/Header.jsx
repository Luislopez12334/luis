import React from "react";
import { data } from "../data/data";

export const Header  = () => {
  return (
    <>
    <div className="header">
      <img src={data.image} alt="image" className="Luis_img" />
      <>
        <br />
        {data.name} <br />
        {data.profession} <br />
        {data.phone} <br />
        {data.email} <br />
        {data.address} <br />
      </>
      </div>
      <br />
    </>
  );
};

export default Header;
