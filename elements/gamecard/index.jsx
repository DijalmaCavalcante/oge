import './style.css'

export default function gamecard (props) {
  const style = {
    '--card-bg': `var(--color-${props.color || 'master'})`
  }

  return (
    <div className="gamecard" style={style}>
      {props.children}
    </div>
  )
}
