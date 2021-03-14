import React from "react";

const EmployeeItem = (props) => {
  const { surname, name, job, salary, date } = props;
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Angajat:{surname} {name}
        </h5>
        <h4 class="card-title">Job:{job}</h4>
        <p class="card-text">Salariu:{salary}</p>
        <p class="card-text">Data angajarii:{date}</p>
      </div>
    </div>
  );
};

export default EmployeeItem;
