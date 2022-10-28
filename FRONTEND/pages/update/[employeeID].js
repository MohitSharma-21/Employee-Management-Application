import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/update/UpdateEmployee.module.css";

export default function EmployeeDetails() {
  const [employee, setEmployee] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const router = useRouter();

  useEffect(() => {
    const id = router.query.employeeID;
    getEmployee(id);
  }, []);

  function getEmployee(id) {
    console.log(id);

    if (!id) return;

    axios({
      url: `/api/${id}/`,
      method: "GET",
    })
      .then(({ data }) => {
        console.log(data);
        setEmployee(data);

        setFirstName(data.employeeFirstName);
        setLastName(data.employeeLastName);
        setEmployeeID(data.employeeID);
        setEmailId(data.emailID);
        setContactNumber(data.contactNumber);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  const updateEmployeeDetails = () => {

    const dataForApiRequest = {
      employeeFirstName: firstName,
      employeeLastName: lastName,
      employeeID: employeeID,
      emailID: emailId,
      contactNumber: contactNumber,
    };
    console.log(dataForApiRequest)

    axios({
      url: `api/${router.query.employeeID}`,
      method: "PUT",
      data: dataForApiRequest,
    })
      .then(({ data }) => {
        console.log("updated", data);
        router.replace("/");
      })
      .catch(function (err) {
        console.log("error");
      });
  };

  return (
    <div className={styles.container}>
      <h2>Update Employee Details</h2>
      <form  className={styles.form}>
      <div className={styles.field}>
        <div>
          <strong>Employee first Name</strong>
          <input
            type="text"
            placeholder={employee.employeeFirstName}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <strong>Employee last Name</strong>
          <input
            type="text"
            placeholder={employee.employeeLastName}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <strong>Employee Employee ID</strong>
          <input
            type="text"
            placeholder={employee.employeeID}
            value={employeeID}
            onChange={(e) => {
              setEmployeeID(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <strong>Employee Email id</strong>
          <input
            type="text"
            placeholder={employee.emailID}
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <strong>Employee Contact Number</strong>
          <input
            type="text"
            placeholder={employee.contactNumber}
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
          ></input>
        </div>
      </div>
      </form>
      <button className={styles.button}
        onClick={() => {
          updateEmployeeDetails();
        }}
      >
        Update
      </button>
    </div>
  );
}
