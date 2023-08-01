import styles from '../styles.module.css'

export function ShareInputContainer({ children }) {
  return (
    <table className={styles.revShareTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pointer</th>
          <th>Weight</th>
          <th>Percent</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
