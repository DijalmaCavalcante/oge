import './style.css'

export default function gamecard (props) {
  function imagesize () {
    const sizes = {
      nano: '50px',
      small: '100px',
      medium: '150px',
      large: '200px'
    }
    return sizes[props.imageSize] || sizes.large
  }

  const style = {
    '--card-bg': `var(--color-${props.color || 'master'})`,
    '--card-pointer': `${props.pointer ? 'pointer' : ''}`,
    '--card-radius': `var(--${props.radius || 'radius-medium'}`,
    '--card-justify': `${props.justify || 'center'}`,
    '--card-direction': `${props.row || 'column'}`,
    '--card-image-size': `${imagesize()}`,
    '--card-width': `${props.wide ? '100%' : 'auto'}`
  }

  return (
    <div className="gamecard" style={style} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
