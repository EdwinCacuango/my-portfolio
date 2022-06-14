import styles from"./Button.module.css"
export const Button = ({children, stylesAdded}) => {

  return <button className={`${styles.Button} ${stylesAdded}`}>{children}</button>
}
