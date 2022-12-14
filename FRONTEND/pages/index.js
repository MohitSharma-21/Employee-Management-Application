import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "../utils/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  function getEmployees() {
    axios({
      url: "/api",
      method: "GET",
    })
      .then(({ data }) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
        errorToast("Error in Loading");
      });
  }

  const deleteEmployee = (id) => {
    console.log(id);
    axios({
      url: `/api/${id}/`,
      method: "DELETE",
    })
      .then((res) => {
        console.log("Task Deleted");
        setEmployees(employees.filter((employee) => employee._id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Employees List</h2>

      <div className={styles.addButton}>
        <button className={styles.button}>
          <Link href="/add_employee">Add Employee</Link>
        </button>
      </div>

      <div>
        <table className={styles.tableData}>
          <thead>
            <tr className={styles.tableHead}>
              <th>Employee First name</th>
              <th>Employee Last name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>kjdfh</td>
              <td>kjdfh</td>
              <td>kjdfh</td>
              <td>
                <button>update</button>
                <button>delete</button>
                <button>view</button>
              </td>
            </tr> */}
            {employees.length > 0 &&
              employees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.employeeFirstName}</td>
                  <td>{employee.employeeLastName}</td>
                  <td>{employee.emailID}</td>
                  <td>
                    <button className={styles.updateButton}>
                      <Link href={`/update/${employee._id}`}>update</Link>
                    </button>

                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteEmployee(employee._id)}
                    >
                      delete
                    </button>

                    <button className={styles.viewButton}>
                      <Link href={`/employee/${employee._id}`}>view</Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
