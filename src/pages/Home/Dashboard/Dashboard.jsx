import React from "react";
import Layout from "../../../components/Layout/Layout";
import { connect } from "react-redux";
import EmployeeList from "../../../components/EmployeeList/EmployeeList";
import { formValueSelector } from "redux-form";
const DashBoard = ({ employees }) => {
  return (
    <Layout>
      <EmployeeList employees={employees} />
    </Layout>
  );
};

const selector = formValueSelector("employee");

export default connect((state) =>
  selector(state, "name", "surname", "job", "salary", "date")
)(DashBoard);
