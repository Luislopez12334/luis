import React from "react";
import { data } from "../data/data";

export default function Experience() {
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        {data.experience.map((val, index) => (
          <>
            {val.company} <br />
            {val.endDate} <br />
            {val.jobDescription} <br />
            {val.jobTitle} <br />
            {val.startDate}
          </>
        ))}
      </div>
    </>
  );
}
