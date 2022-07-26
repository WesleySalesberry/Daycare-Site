export const PrimaryButton = ({ children, type, style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-primary ${style}`}
    >
      {children}
    </button>
  )
}

export const SecondaryButton = ({ children, type, style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-secondary ${style}`}
    >
      {children}
    </button>
  )
}

export const SuccessButton = ({ children, type, style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-secondary ${style}`}
    >{children}</button>
  )
}

export const WarningButton = ({ children, type, style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-warning ${style}`}
    >
      {children}
    </button>
  )
}

export const DangerButton = ({ children, type, style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-danger ${style}`}
    >
      {children}
    </button>
  )
}