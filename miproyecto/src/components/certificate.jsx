import React from "react";
import { data } from "../data/data";

export default function certificate() {
  return (
    <>
      <>
      <div className="Certificate">
        <h2>Certificate</h2>
          {data.certificate.map((val, index) => (
            <>
              {val.date} <br />
              {val.description} <br />
              {val.institution} <br />
              {val.name}
            </>
          ))}
        </div>
      </>
    </>
  );
}
