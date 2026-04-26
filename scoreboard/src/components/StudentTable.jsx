import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-row">No students added yet.</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index + 1}
                onUpdateScore={onUpdateScore}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
