import Head from "next/head";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/employee/EmployeeDetails.module.css";

export default function EmployeeDetails() {
  const [employee, setEmployee] = useState("");
  const router = useRouter();
  const employeeID = router.query.employeeID;
  // const id = employeeID;

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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div  className={styles.container}>
      <h2>Employee Details</h2>
      <div className={styles.details}>
        <div>
          <strong>Employee first Name :- </strong>
          {employee.employeeFirstName}
        </div>
        <div>
          <strong>Employee last Name :- </strong>
          {employee.employeeLastName}
        </div>
        <div>
          <strong>Employee Employee ID :- </strong>
          {employee.employeeID}
        </div>
        <div>
          <strong>Employee Email-id :- </strong>
          {employee.emailID}
        </div>
        <div>
          <strong>Employee Contact Number :- </strong>
          {employee.contactNumber}
        </div>
      </div>
    </div>
  );
}
