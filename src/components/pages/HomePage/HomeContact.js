import { Form } from "react-bootstrap";
import React, { useState } from "react";
import "../../../css/haku.scss";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { reverse } from "lodash";
import emailjs from "emailjs-com";

function SendEmail(e) {
  e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

  emailjs
    .sendForm(
      "service_zit4uzq",
      "template_v11wxas",
      e.target,
      "d2fOY9m0FNvfm3rlO"
    )
    .then(
      (result) => {
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default function HomeContact() {
  return (
    <div
      className="homeContactContainer"
      style={{ maxHeight: "fitContent", margin: "auto" }}
    >
      <div
        className="home-contact-title"
        style={{ margin: "auto", marginTop: "2rem" }}
      >
        Contact Us
      </div>
      <form
        style={{ margin: "auto", marginTop: "2rem" }}
        onSubmit={SendEmail}
      >
        <table className="home-contact-table" style={{ margin: "auto" }}>
          <tr
            className="home-contact-table-row"
            style={{ border: "top-right" }}
          >
            <td>
              <input
                style={{ width: "100%" }}
                type="text"
                required
                placeholder="FirstName"
                name="firstName"
              />
            </td>
            <td>
              <input
                style={{ width: "100%" }}
                type="text"
                required
                placeholder="LastName"
                name="lastName"
              />
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <input
                style={{ width: "100%" }}
                type="email"
                required
                placeholder="e-mail (example@ex.com)"
                name="email"
              ></input>
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Company (optional)"
                name="company"
              ></input>
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Title (optional)"
                name="title"
              ></input>
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Skype address (optional)"
                name="skype"
              ></input>
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Fiber account (optional)"
                name="fiber"
              ></input>
            </td>
          </tr>
          <tr className="home-contact-table-row">
            <td colSpan={2}>
              <textarea
                required
                name="sms"
                style={{ padding: "1rem" }}
                placeholder="input your text..."
              />
            </td>
          </tr>
          <tr colSpan={3}></tr>
          <tr style={{ border: "none" }}>
            <td colSpan={3}></td>
          </tr>
          <input
            type="submit"
            value="Submit"
            className="contact-button"
            // type="submit"
          ></input>
        </table>
      </form>
      {/* <div id="doneText" className="btn btn-success">
        Sent!
      </div> */}
    </div>
  );
}

function ShowResult() {
  const doneText = document.getElementById("doneText");
  setInterval(() => {
    setTimeout.classList.add("colorTest");
  }, 2000);
  // doneText.classList.remove("colorTest");
}
