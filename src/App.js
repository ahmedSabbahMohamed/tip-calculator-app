import dollar from "./images/icon-dollar.svg";
import person from './images/icon-person.svg';
import logo from './images/logo.svg';
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [numPerson, setNumPerson] = useState("");
  const [tip, setTip] = useState("");
  function Tip (e) {
    let tip = document.querySelectorAll(".tip");
    tip.forEach(ele => {
      setTip(e.currentTarget.value);
      e.currentTarget.classList.add("bg-gcyan");
      e.currentTarget.classList.remove("bg-vdcyan");
      ele.classList.remove("bg-gcyan");
      ele.classList.add("bg-vdcyan");
    });
  }
  function numOfPerson (e) {
    setNumPerson(e.target.value)
    let personField = document.querySelector(".numPerson");
    let zero = document.querySelector(".zero");
    if (numPerson === "0") {
      personField.style.border = "2px solid red";
      zero.classList.remove("hidden");
    } else if (numPerson !== "0" || numPerson === "") {
      personField.style.border = "0";
      zero.classList.add("hidden");
    }
  }
  window.onload = function () {
    let nan = document.querySelector(".amount");
    let total = document.querySelector(".total")
    if (nan.value === `$NaN` || total.value === `$NaN`) {
      nan.value = `$0.00`;
      total.value = `$0.00`;
    }
  }
  return (
    <>
    <main className="max-w-xl">
        <div className="grid place-items-center mb-8">
        <img src={logo} alt="logo" />
        </div>
      <div className="bg-white p-4 m-2 rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2">

        <div className="input">
          <label
            className="block text-vdcyan text-xs py-1"
            htmlFor="bill"
          >
            Bill
          </label>
          <div className="relative mb-5">
            <img className="absolute text-gcyan z-10 top-2 left-2" src={dollar} alt="dollar" />
            <input
              className="w-full p-1 borde-0 bg-vlgcyan rounded-md text-gcyan text-right focus:border-cyan"
              name="bill" id="bill"
              placeholder="0"
              value={bill}
              onChange={e => setBill(e.target.value)}
            />
          </div>

          <label
            className="block text-vdcyan text-xs py-1"
            htmlFor="tip"
          >
            Select Tip:
          </label>
          <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-3">
            <button
              className="tip cursor-pointer bg-vdcyan text-vlgcyan p-1 rounded-md text-center"
              type="text"
              readOnly
              value={5}
              onClick={Tip}
            >5%</button>
            <button
              className="tip cursor-pointer bg-vdcyan text-vlgcyan p-1 rounded-md text-center"
              type="text"
              readOnly
              value={10}
              onClick={Tip}
            >10%</button>
            <button
              className="tip cursor-pointer bg-vdcyan text-vlgcyan p-1 rounded-md text-center"
              type="text"
              readOnly
              value={15}
              onClick={Tip}
            >15%</button>
            <button
              className="tip cursor-pointer bg-vdcyan text-vlgcyan p-1 rounded-md text-center"
              type="text"
              readOnly
              value={25}
              onClick={Tip}
            >25%</button>
            <button
              className="tip cursor-pointer bg-vdcyan text-vlgcyan p-1 rounded-md text-center"
              type="text"
              readOnly
              value={50}
              onClick={Tip}
            >50%</button>
            <input
              className="tip bg-vlgcyan text-gcyan p-1 rounded-md text-center"
              type="text"
              placeholder="CUSTOM"
              value={tip}
              onClick={Tip}
              onChange={e => setTip(e.target.value)}
            />
          </div>


          <label
            className="flex justify-between items-center"
            htmlFor="person"
          >
            <span className="text-vdcyan text-xs py-1">Number of people</span>
            <span className="zero text-red-600 text-xs py-1 hidden">can't be zero</span>
          </label>
          <div className="relative">
            <img className="absolute text-gcyan z-10 top-2 left-2" src={person} alt="person" />
            <input
              className="numPerson w-full p-1 borde-2 border-transparent bg-vlgcyan rounded-md text-gcyan text-right focus:border-cyan"
              name="person" id="person"
              placeholder="0"
              value={numPerson}
              onChange={numOfPerson}
            />
          </div>


        </div>

        <div className="output bg-vdcyan rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-vlgcyan text-sm">Tip amount</p>
                <small className="text-dgcyan text-xs">/person</small>
              </div>
              <input
                className="amount bg-trasparent p-2 text-cyan text-right text-xl w-1/2"
                type="text"
                readOnly
                value={`$${eval(bill * (tip / 100) / numPerson).toString()}`}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-vlgcyan text-sm">Total</p>
                <small className="text-dgcyan text-xs">/person</small>
              </div>
              <input
                className="total bg-trasparent p-2 text-cyan text-right text-xl w-1/2"
                type="text"
                readOnly
              />
            </div>

            <button className="w-full bg-dgcyan p-1 rounded-md text-gcyan md:mt-16" onClick={() => {setBill(""); setNumPerson(""); setTip("")}}>Reset</button>
          </div>

      </div>
    </main>
    </>
  );
}

export default App;
