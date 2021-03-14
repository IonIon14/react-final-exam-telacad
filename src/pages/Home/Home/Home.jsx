import React from "react";

import { connect } from "react-redux";
import EmployeeForm from "../../../components/EmployeeForm/EmployeeForm";
import Layout from "../../../components/Layout/Layout";
import { addEmployee } from "../../../redux/form/formActions";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <EmployeeForm {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmployee: () => dispatch(addEmployee()),
});

export default connect(null, mapDispatchToProps)(Home);
