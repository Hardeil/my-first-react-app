import React from "react";
import Employee from "../component/employee";

function Dashboard() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Employee.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.status === "Active" ? emp.salary : "None"}</td>
                <td>{emp.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
