import React from "react";
import ecomerceSS from "./assets/ecomerceSS.png";
import "./ExSite.css";

export default function ExSite() {
  return (
    <div className="exSite">
      <div className="exSite-header">
        <h3>
          Here are some demo web-layouts I have been working on to make your
          ideas come to fruition
        </h3>
        <p>(Currently a work in progress)</p>
      </div>

      <div className="exWebsites">
        <div className="exSite-indiv">
          <h4>1. Ecommerce Website</h4>
          <img src={ecomerceSS} alt="" />
          <br />
          <a href="https://clothing-solution-mnvci35rj-matthew0sellers-projects.vercel.app/">
            Clothing Solutions
          </a>
          <br />
          
          <h4>1. Ecommerce Website</h4>
          <img src={ecomerceSS} alt="" />
          <br />
          <a href="https://clothing-solution-mnvci35rj-matthew0sellers-projects.vercel.app/">
            Clothing Solutions
          </a>
        </div>

        <div className="exSite-indiv">
          <h4>1. Ecommerce Website</h4>
          <img src={ecomerceSS} alt="" />
          <br />
          <a href="https://clothing-solution-mnvci35rj-matthew0sellers-projects.vercel.app/">
            Clothing Solutions
          </a>
          <br />

          <h4>1. Ecommerce Website</h4>
          <img src={ecomerceSS} alt="" />
          <br />
          <a href="https://clothing-solution-mnvci35rj-matthew0sellers-projects.vercel.app/">
            Clothing Solutions
          </a>
        </div>
      </div>
    </div>
  );
}
