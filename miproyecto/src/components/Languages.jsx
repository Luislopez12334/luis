import React from "react";
import { data } from "../data/data";

export default function Languages() {
  return (
    <>
      <div className="languages">
      <>
        {data.languages.map((val, index) => (
          <>
            {val.name} <br />
            {val.percentage} <br />
            <br />
          </>
        ))}
      </>
      </div>
    </>
  );
}
