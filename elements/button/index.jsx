import './style.css'

export default function button ({ children, ...props }) {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  )
}
