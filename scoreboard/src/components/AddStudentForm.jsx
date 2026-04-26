import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Student name is required.')
      return
    }
    if (score === '' || isNaN(score) || score < 0 || score > 100) {
      setError('Score must be between 0 and 100.')
      return
    }
    onAddStudent(name.trim(), score)
    setName('')
    setScore('')
    setError('')
  }

  return (
    <div className="add-form-card">
      {error && <p className="form-error">{error}</p>}
      <div className="form-group">
        <label className="form-label" htmlFor="student-name">
          Student Name
        </label>
        <input
          id="student-name"
          type="text"
          className="form-input"
          placeholder="e.g. Rahul Gupta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="student-score">
          Score (0–100)
        </label>
        <input
          id="student-score"
          type="number"
          className="form-input"
          placeholder="e.g. 75"
          value={score}
          min="0"
          max="100"
          onChange={(e) => setScore(e.target.value)}
        />
      </div>

      <button className="add-btn" onClick={handleSubmit}>
        + Add Student
      </button>

      <p className="form-hint">
        Pass threshold: <strong>40 marks</strong>
      </p>
    </div>
  )
}

export default AddStudentForm
