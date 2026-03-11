import { useState } from "react"
import { addAttendanceData, getAttendanceData } from "../../helpers/Services/employeeList"
import "../App.css"

function Attendance() {

    const [form, setForm] = useState({
        employee_id: "",
        date: "",
        status: "Present"
    })

    const [emp, setEmp] = useState("")
    const [records, setRecords] = useState([])

    const submit = async (e) => {

        e.preventDefault()

        if (!form.employee_id || !form.date) {
            alert("Please fill all fields")
            return
        }

        await addAttendanceData(form).then((response) => {
            if (response?.succeeded) {
                alert(response?.message)
                setForm({
                    employee_id: "",
                    date: "",
                    status: "Present"
                })
            } else {
                alert(response?.message)
            }
        })
    }

    const loadAttendance = async () => {

        if (!emp) {
            alert("Enter Employee ID")
            return
        }
        let payload = {
            employee_id: emp
        }
        await getAttendanceData(payload).then((response) => {
            if (response?.succeeded) {
                setRecords(response?.data || [])
            }
        })
    }

    return (

        <div className="pageWrapper">

            <div className="container">

                <div className="card">

                    <h2 className="formTitle">Mark Attendance</h2>

                    <form className="formGroup" onSubmit={submit}>

                        <input
                            className="input"
                            placeholder="Employee ID"
                            value={form.employee_id}
                            onChange={(e) => setForm({ ...form, employee_id: e.target.value })}
                        />

                        <input
                            className="input"
                            type="date"
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                        />

                        <select
                            className="input"
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                        >
                            <option>Present</option>
                            <option>Absent</option>
                        </select>

                        <button className="btnSubmit">
                            {loading ? "Saving..." : "Mark Attendance"}
                        </button>

                    </form>

                </div>

                <div className="card">

                    <h2 className="formTitle">Attendance History</h2>

                    <div className="searchRow">

                        <input
                            className="input"
                            placeholder="Employee ID"
                            value={emp}
                            onChange={(e) => setEmp(e.target.value)}
                        />

                        <button className="btnView" onClick={loadAttendance}>
                            Search
                        </button>

                    </div>

                    <div className="tableContainer">

                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Emp Id</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {records.length === 0 ? (

                                    <tr>
                                        <td colSpan="2" className="noData">
                                            No records found
                                        </td>
                                    </tr>

                                ) : (

                                    records.map((r, i) => (
                                        <tr key={i}>
                                            <td>{r.employee_id}</td>
                                            <td>{r.date}</td>
                                            <td className={r.status === "Present" ? "statusPresent" : "statusAbsent"}>
                                                {r.status}
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

export default Attendance