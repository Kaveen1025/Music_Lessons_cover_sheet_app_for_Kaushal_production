import React, { useState } from "react";
import axios from "axios";

export default function CustomerRegistration(props) {
  return (
    <div className="container-sm">
      <br />
      <br />
      <div class="card" style={{ border: "solid #764A34" }}>
        <div class="card-body">
          <div class="text-center">
            <img
              src={"/images/Kaushal_temp_logo.png"}
              class="rounded img-responsive"
              alt="Production_logo"
              style={{ width: "150px" }}
            />
          </div>
          <br />
          <form>
            <div class="text-center">
              <h2 style={{ color: "#764A34" }}>REGISTER HERE</h2>
            </div>
            <br />
            {/* username */}
            <div class="text-center">
              <div class="container-fluid">
                <div class="form-group row">
                  <div class="input-group">
                    <span
                      class="input-group-addon"
                      style={{ marginRight: "5px" }}
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      class="form-control rounded"
                      id="inputUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* email */}
            <div class="text-center">
              <div class="container-fluid">
                <div class="form-group row">
                  <div class="input-group">
                    <span
                      class="input-group-addon"
                      style={{ marginRight: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      class="form-control rounded"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* contact */}
            <div class="text-center">
              <div class="container-fluid">
                <div class="form-group row">
                  <div class="input-group">
                    <span
                      class="input-group-addon"
                      style={{ marginRight: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <input
                      type="number"
                      class="form-control rounded"
                      id="inputContact"
                      placeholder="Contact"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* password */}
            <div class="text-center">
              <div class="container-fluid">
                <div class="form-group row">
                  <div class="input-group">
                    <span
                      class="input-group-addon"
                      style={{ marginRight: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      class="form-control rounded"
                      id="inputpassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* retype password  */}
            <div class="text-center">
              <div class="container-fluid">
                <div class="form-group row">
                  <div class="input-group">
                    <span
                      class="input-group-addon"
                      style={{ marginRight: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      class="form-control rounded"
                      id="inputConfirmPassword"
                      placeholder="Re-type Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
