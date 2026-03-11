import React, { useState, useEffect } from "react"
import { deleteEmployeesData, getEmployeesList, setEmployeesData } from "../../helpers/Services/employeeList"
import "../App.css"

function Employees() {

    const [employees, setEmployees] = useState([])
    const [form, setForm] = useState({
        employee_id: "",
        full_name: "",
        email: "",
        department: ""
    })

    useEffect(() => {
        loadEmployees()
    }, [])

    const loadEmployees = async () => {
        await getEmployeesList().then((response) => {
            if (response?.succeeded) {
                setEmployees(response?.data || [])
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const submit = async (e) => {
        e.preventDefault()

        if (!form.employee_id || !form.full_name) {
            alert("Please fill required fields")
            return
        }

        await setEmployeesData(form).then((response) => {
            if (response?.succeeded) {
                alert(response?.message)

                setForm({
                    employee_id: "",
                    full_name: "",
                    email: "",
                    department: ""
                })

                loadEmployees()
            }else {
                alert(response?.message)
            }
        })
    }

    const deleteEmployee = async (id) => {

        if (window.confirm("Delete this employee?")) {
            let payload = {
                employee_id: id
            }
            await deleteEmployeesData(payload).then((response) => {
                if (response?.succeeded) {
                    loadEmployees()
                }
            })
        }
    }

    return (

        <div className="pageWrapper">

            <div className="container">

                <div className="card">

                    <h2 className="formTitle">Add Employee</h2>

                    <form className="formGroup" onSubmit={submit}>

                        <input
                            className="input"
                            name="employee_id"
                            placeholder="Employee ID"
                            value={form.employee_id}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="full_name"
                            placeholder="Full Name"
                            value={form.full_name}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="department"
                            placeholder="Department"
                            value={form.department}
                            onChange={handleChange}
                        />

                        <button className="btnSubmit">
                            Add Employee
                        </button>

                    </form>

                </div>

                <h2 className="listTitle">Employee List</h2>

                <div className="card">

                    <div className="tableContainer">

                        <table className="table">

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Dept</th>
                                    <th>Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {employees.length === 0 ? (

                                    <tr>
                                        <td colSpan="5" className="noData">
                                            No employees found
                                        </td>
                                    </tr>

                                ) : (

                                    employees.map(emp => (

                                        <tr key={emp.employee_id}>

                                            <td>{emp.employee_id}</td>
                                            <td>{emp.full_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.department}</td>

                                            <td>

                                                <button
                                                    className="btnDelete"
                                                    onClick={() => deleteEmployee(emp.employee_id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Employees