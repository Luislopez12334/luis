import React from "react";
import { data } from "../data/data";

export default function Social() {
  return (
    <>
      <div className="social">
        <h2>social</h2>
      <>
        {data.social.map((val, index) => (
          <>
            {val.namee} <br />
            {val.url} <br />
          </>
        ))}
      </>
      </div>
    </>
  );
}
