import styles from './table.module.scss'

const TableRow = ({ channel, cost, convValue, roas, imp, click, ctr, cpc }: ITable) => {
  return (
    <tr>
      <td>{channel}</td>
      <td>{cost}</td>
      <td>{roas}</td>
      <td>{imp}</td>
      <td>{convValue}</td>
      <td>{click}</td>
      <td>{ctr}</td>
      <td>{cpc}</td>
    </tr>
  )
}

export default TableRow
