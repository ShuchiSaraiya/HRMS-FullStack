import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Attendence.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Vatsal Shah", 18908424, "2 March 2022", "On Leave"),
  createData("Prachi Shah ", 18908424, "2 March 2022", "Present"),
  createData("Keyur Brahmbhatt", 18908424, "2 March 2022", "On Leave"),
  createData("Cupcake", 18908421, "2 March 2022", "Present"),
];


const makeStyle=(status)=>{
  if(status === 'Present')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'On Leave')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
}

export default function Attendence() {
  return (
      <div className="Table">
      <h3 className="font-bold py-3 px-1 text-xl">Faculty</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius:'15px,', marginBottom:'10px'}}
        >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Faculty</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
