import React from "react";
import { connect } from "react-redux";
import EmployeeItem from "../../components/EmployeeItem/EmployeeItem";
const EmployeeList = ({ employees }) => {
  return (
    <div className="container">
      <h3 className="text-center mt-4">Lista angajati</h3>
      <div className="row my-4">
        {employees.map((employee, index) => {
          return <EmployeeItem {...employee} key={index} />;
        })}
        ;
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

export default connect(mapStateToProps, null)(EmployeeList);
