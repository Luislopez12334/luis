import React from "react";
import { data } from "../data/data";

export default function Interest() {
  return (
    <>
        <div className="interest">
      <>
        {data.interest.map((val) => (
          <>
            {val} <br />
          </>
        ))}
      </>
      </div>
    </>
  );
}
