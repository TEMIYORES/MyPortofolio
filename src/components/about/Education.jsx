import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>AD</td>
          <td>Software Engineering</td>
          <td>Aptech Computer Education</td>
          <td>2019 - 2022</td>
        </tr>

        <tr>
          <td>WAEC</td>
          <td>General</td>
          <td>Catholic Comprehensive college</td>
          <td>2016 - 2018</td>
        </tr>

        <tr>
          <td>SSC</td>
          <td>General</td>
          <td>Catholic Comprehensive College</td>
          <td>2012 - 2016</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
