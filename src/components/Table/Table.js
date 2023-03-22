import "./Table.css";
import { Data, tableHeader } from "../../Data/Data";
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
      <table className="content-table">
        <thead>
          <tr>
            <td colSpan={8}>
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
            {tableHeader.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data[plotId].tableData.map((row) => (
            <tr key={row.treeNumber}>
              <td>{row.treeNumber}</td>
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
