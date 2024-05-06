"use client"

import "./faq.css";
import Inner from "./Inner";




export default function FAQ() {
    return (
      <section id='faq'>
        <div className="FAQ">
        <div className="faq__container">
            <h1 className="faq__header">F.A.Q.</h1>
            <Inner/>
        </div>
        </div>
    </section >
    );
  }