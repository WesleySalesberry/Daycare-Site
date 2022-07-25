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

export const SuccessButtonOutline = ({ children, type="submit", style }) => {
  return (
    <button type={type} className={`btn btn-outline-success ${style}`}>{children}</button>
  )
}

export const WarningButtonOutline = ({ children, type="submit", style }) => {
  return (
    <button type={type} className={`btn btn-outline-warning ${style}`}>{children}</button>
  )
}

export const DangerButtonOutline = ({ children, type="submit", style }) => {
  return (
    <button type={type} className={`btn btn-outline-danger ${style}`}>{children}</button>
  )
}