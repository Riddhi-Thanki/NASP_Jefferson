import "./Table.css";
import { data } from "./TableData";

export default function Table({ tableState, setTableState }) {
  if (!tableState) {
    return;
  }
  return (
    <div>
      <table class="content-table">
        <thead>
          <tr>
            <td colspan={8}>
              <button
                className="button"
                onClick={() => {
                  setTableState(!tableState);
                }}
              >
                Close
              </button>
            </td>
          </tr>
          <tr>
            <th>Tree #</th>
            <th>Species</th>

            <th>Class</th>
            <th>DBH</th>
            <th>Crown Class</th>
            <th>Logs</th>
            <th>Bolts</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.treeNumber}>
              <td component="th" scope="row">
                {row.treeNumber}
              </td>
              <td>{row.species}</td>
              <td>{row.class}</td>
              <td>{row.dbh}</td>
              <td>{row.crownClass}</td>
              <td>{row.logs}</td>
              <td>{row.bolts}</td>
              <td>{row.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
