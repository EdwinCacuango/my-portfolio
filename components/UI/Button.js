export const Button = ({children, stylesAdded, onClick}) => {
  return <button onClick={onClick}className={`btn-primary ${stylesAdded}`}>{children}</button>
}
