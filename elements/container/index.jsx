import './style.css'

export default function container (props) {
  const style = {
    '--container-direction': `${props.row || 'column'}`,
    '--container-justify': `${props.justify || 'center'}`,
    '--container-align': `${props.align || 'center'}`
  }

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  )
}