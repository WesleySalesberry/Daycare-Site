export const PrimaryButton = ({ children, width }) => {
  return (
    <button type="button" className={`btn btn-primary ${width}`}>{children}</button>
  )
}

export const SecondaryButton = ({ children, width }) => {
  return (
    <button type="button" className={`btn btn-secondary ${width}`}>{children}</button>
  )
}

export const SuccessButton = ({ children }) => {
  return (
    <button type="button" className="btn btn-success">{children}</button>
  )
}

export const WarningButton = ({ children }) => {
  return (
    <button type="button" className="btn btn-warning">{children}</button>
  )
}

export const DangerButton = ({ children }) => {
  return (
    <button type="button" className="btn btn-danger">{children}</button>
  )
}