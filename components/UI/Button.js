export const Button = ({children, stylesAdded}) => {
  return <button className={`btn-primary ${stylesAdded}`}>{children}</button>
}
