import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Aanya Sharma', score: 78 },
  { id: 2, name: 'Rohan Mehta', score: 34 },
  { id: 3, name: 'Priya Kapoor', score: 92 },
  { id: 4, name: 'Arjun Singh', score: 55 },
  { id: 5, name: 'Sneha Verma', score: 28 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, score: Number(newScore) } : student
      )
    )
  }

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    }
    setStudents(prev => [...prev, newStudent])
  }

  const passCount = students.filter(s => s.score >= 40).length
  const failCount = students.length - passCount

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <div className="stats-bar">
          <div className="stat-chip total">
            <span className="stat-num">{students.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-chip pass">
            <span className="stat-num">{passCount}</span>
            <span className="stat-label">Passed</span>
          </div>
          <div className="stat-chip fail">
            <span className="stat-num">{failCount}</span>
            <span className="stat-label">Failed</span>
          </div>
        </div>

        <div className="content-grid">
          <section className="table-section">
            <h2 className="section-title">Student Records</h2>
            <StudentTable students={students} onUpdateScore={updateScore} />
          </section>

          <aside className="form-section">
            <h2 className="section-title">Add Student</h2>
            <AddStudentForm onAddStudent={addStudent} />
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App
