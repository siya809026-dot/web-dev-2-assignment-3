import { useState } from 'react'

function StudentRow({ student, index, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score)
  const isPassed = student.score >= 40

  const handleUpdate = () => {
    if (inputScore === '' || isNaN(inputScore)) return
    const val = Math.min(100, Math.max(0, Number(inputScore)))
    onUpdateScore(student.id, val)
    setInputScore(val)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate()
  }

  return (
    <tr className={`student-row ${isPassed ? 'row-pass' : 'row-fail'}`}>
      <td className="col-index">{index}</td>
      <td className="col-name">{student.name}</td>
      <td className="col-score">
        <span className={`score-badge ${isPassed ? 'score-pass' : 'score-fail'}`}>
          {student.score}
        </span>
      </td>
      <td className="col-status">
        <span className={`status-pill ${isPassed ? 'pill-pass' : 'pill-fail'}`}>
          {isPassed ? '✓ Pass' : '✗ Fail'}
        </span>
      </td>
      <td className="col-update">
        <div className="update-group">
          <input
            type="number"
            className="score-input"
            value={inputScore}
            min="0"
            max="100"
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow
