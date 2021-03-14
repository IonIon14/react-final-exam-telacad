import React from "react";
import "./EmployeeForm.scss";
import { Field, reduxForm } from "redux-form";
const EmployeeForm = ({
  addEmployee,
  fields: { surname, name, job, salary, date },
  handleSubmit,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <form class="login-form" onSubmit={handleSubmit(addEmployee)}>
          <h1>Formular angajati</h1>
          <div class="form-input-material d-flex flex-column">
            <label for="lastname">Nume</label>
            <Field
              type="text"
              name="surname"
              component="input"
              placeholder=" "
              autocomplete="off"
              className="form-control-material"
              {...surname}
              required
            />
          </div>
          <div class="form-input-material d-flex flex-column">
            <label for="firstname">Prenume</label>
            <Field
              type="text"
              name="name"
              component="input"
              placeholder=" "
              autocomplete="off"
              className="form-control-material"
              {...name}
              required
            />
          </div>
          <div class="form-input-material d-flex flex-column">
            <label for="job">Meserie</label>
            <Field
              type="text"
              name="job"
              component="input"
              placeholder=" "
              autocomplete="off"
              className="form-control-material"
              {...job}
              required
            />
          </div>
          <div class="form-input-material d-flex flex-column">
            <label for="salary">Salariu</label>
            <Field
              type="number"
              name="salary"
              component="input"
              placeholder=" "
              autocomplete="off"
              className="form-control-material"
              {...salary}
              required
            />
          </div>
          <div class="form-input-material d-flex flex-column">
            <label for="date">Data angajare</label>
            <Field
              type="date"
              name="date"
              value="2021-03-08"
              min="2000-01-01"
              max="2099-12-31"
              component="input"
              {...date}
              required
            />
          </div>
          <button type="submit" class="btn btn-primary btn-ghost mt-4 w-100">
            Adauga angajat
          </button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "employee",
  fields: ["surname", "name", "job", "salary", "date"],
})(EmployeeForm);
