export const PrimaryButtonOutline = ({ children, type="submit", style }) => {
  return (
    <button type={type} className={`btn btn-outline-primary ${style}`}>{children}</button>
  )
}

export const SecondaryButtonOutline = ({ children, type="submit", style }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-outline-secondary ${style}`}
    >
      {children}
    </button>
  )
}

export const SuccessButtonOutline = ({ children }) => {
  return (
    <button type="button" className="btn btn-outline-success">{children}</button>
  )
}

export const WarningButtonOutline = ({ children }) => {
  return (
    <button type="button" className="btn btn-outline-warning">{children}</button>
  )
}

export const DangerButtonOutline = ({ children }) => {
  return (
    <button type="button" className="btn btn-outline-danger">{children}</button>
  )
}