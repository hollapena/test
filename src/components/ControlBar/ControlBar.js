import './controlbar.css'

export default function ControlBar (props) {
  let prevBtn = '< Previous'
  let nextBtn = 'Next >'

  return(
    <div className="controlbar">
      <button className="navbtn" onClick={() => props.displayCard('minus')}><strong>{prevBtn}</strong></button>
      <div>
      <button><strong>Edit</strong></button>
      <button><strong>Delete</strong></button>
      <button><strong>New</strong></button>
      </div>
      <button className="navbtn" onClick={() => props.displayCard('plus')}><strong>{nextBtn}</strong></button>
    </div>
  )
}