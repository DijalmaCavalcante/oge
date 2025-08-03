import './style.css'

export default function container (props) {
  const style = {
    '--container-direction': `${props.row || 'column'}`,
    '--container-justify': `${props.justify || ''}`,
    '--container-align': `${props.align || ''}`
  }

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  )
}