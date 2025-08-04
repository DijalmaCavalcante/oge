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
    '--card-color': `var(--color-${props.color || 'white'})`,
    '--card-direction': `${props.row || 'column'}`,
    '--card-image-size': `${imagesize()}`,
    '--card-justify': `${props.justify || 'center'}`,
    '--card-linkBg-hover': `var(--color-${props.linkBgHover || 'purple-darker'})`,
    '--card-linkBg': `var(--color-${props.linkBg || 'purple'})`,
    '--card-pointer': `${props.pointer ? 'pointer' : ''}`,
    '--card-radius': `var(--${props.radius || 'radius-medium'}`,
    '--card-width': `${props.wide ? '100%' : 'auto'}`,
  } 

  return (
    <div className="gamecard" style={style} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
