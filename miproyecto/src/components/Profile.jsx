import React from "react";
import { data } from "../data/data";

export default function Profile() {
  return (
    <>
      <>
      <div className="profile">
        <h2>Profile</h2>
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
