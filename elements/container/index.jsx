import './style.css'

export default function container (props) {
  const style = {
    '--container-direction': `${props.row || 'column'}`
  }

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  )
}