import './controlbar.css'

export default function ControlBar (props) {
  let prevBtn = '< Previous'
  let nextBtn = 'Next >'

  return(
    <div className="controlbar">
      <h3>{prevBtn}</h3>
      <div>
      <button><strong>Edit</strong></button>
      <button><strong>Delete</strong></button>
      <button><strong>New</strong></button>
      </div>
      <h3>{nextBtn}</h3>
    </div>
  )
}