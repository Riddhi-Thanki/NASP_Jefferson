import "./Table.css";
import { Data } from "../../Data/Data";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function Table() {
  // *****************************
  // * Getting states from App
  // *****************************
  const { plotId, tableState, setTableState } = useContext(AppContext);

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
          {Data[plotId].tableData.map((row) => (
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
