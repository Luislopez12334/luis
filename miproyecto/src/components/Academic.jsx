import React from "react";
import { data } from "../data/data";

export default function Academic() {
  return (
    <>
      <div className="academic">
        <h2>academic</h2>
        {data.Academic.map((val, index) => (
          <>
            {val.degree} <br />
            {val.description} <br />
            {val.institution} <br />
            {val.endDate} <br />
            {val.startDate}
          </>
        ))}
      </div>
    </>
  );
}
