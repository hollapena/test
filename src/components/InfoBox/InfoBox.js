import './infobox.css'
import Facts from './Facts/Facts'
import Info from './Info/Info'
import Name from './Name/Name'

export default function InfoBox(props) {


  return (
    <div className="infobox">
      <Name />
      <Info />
      <Facts />
    </div>
  )
}