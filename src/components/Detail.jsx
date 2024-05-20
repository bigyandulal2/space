import React from "react";

export default function Detail({ number, detail }) {
  return (
    <div id="about_detail" className="flex align-middle gap-7 uppercase">
      <span className="text-5xl md:text-4xl sm:text-3xl ">{number}</span>
      <h3 className="text-5xl md:text-4xl ">{detail}</h3>
    </div>
  );
}
