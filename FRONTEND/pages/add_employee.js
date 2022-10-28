import Image from "next/image";
import { useState } from "react";
import axios from "../utils/axios";
import styles from "../styles/AddEmployee.module.css";
import { useRouter } from "next/router";


export default function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const router = useRouter();

  const addEmployee = () => {
    const dataForApiRequest = {
      employeeFirstName: firstName,
      employeeLastName: lastName,
      employeeID: employeeID,
      emailID: emailId,
      contactNumber: contactNumber,
    };

    axios({
      url: "api/addEmployee/",
      method: "POST",
      data: dataForApiRequest,
    })
      .then(({ data }) => {
        console.log("added", data);
        router.replace("/");
      })
      .catch(function (err) {
        console.log("error");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Enter Employee Details</h1>
      <form  className={styles.form}>
        <div className={styles.field}>
          <label>Employee First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Employee Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Employee ID</label>
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeID}
            onChange={(e) => {
              setEmployeeID(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Email ID</label>
          <input
            type="text"
            placeholder="Email Id"
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Contact Number</label>
          <input
            type="text"
            placeholder="First Name"
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
          ></input>
        </div>
      </form>
      <button className={styles.button} onClick={() => addEmployee()}>Add Employee</button>
    </div>
  );
}
