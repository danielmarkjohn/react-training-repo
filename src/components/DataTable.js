import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react"
import { data_columns, data_paginationModel } from '../constants';

export default function DataTable(props) {
  const [rows, setRow] = useState([]);

  useEffect(() => {
    setRow(props.data);
  }, [props.data])

  return (
    <Paper className="data-table-class">
      <DataGrid
        rows={rows}
        columns={data_columns}
        initialState={{ pagination: { data_paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
