import './style.css'

export default function container (props) {

  const style = {
    '--container-direction': `${props.row || 'column'}`,
    '--container-justify': `${props.justify || 'center'}`,
    '--container-align': `${props.align || 'center'}`,
    '--container-wrap': `${props.wrap ? 'wrap' : ''}`,
    '--container-gap': `var(--spacing_inset-${props.gap || 'xs'})`
  }

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  )
}