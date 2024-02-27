import React, { useState } from 'react';
import { DataGrid, GridColDef, DataGridProps } from '@mui/x-data-grid';

interface CustomDataGridProps extends Omit<DataGridProps, 'rows' | 'columns'> {
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
}

interface DataTableProps extends Omit<CustomDataGridProps, 'pageSize' | 'checkboxSelection' | 'disableSelectionOnClick'> {
  tableColumns: GridColDef[];
  tableRows: any[];
}

const DataTable: React.FC<DataTableProps> = ({ tableColumns, tableRows, ...gridProps }) => {
  const [filteredRows, setFilteredRows] = useState(tableRows);

  const handleFilter = (filterText: string) => {
    const filtered = tableRows.filter(row => {
      // Implement your custom filtering logic here
      return Object.values(row).some(value =>
        String(value).toLowerCase().includes(filterText.toLowerCase())
      );
    });
    setFilteredRows(filtered);
  };

  const dataGridProps: CustomDataGridProps = {
    pageSize: 5,
    checkboxSelection: true,
    disableSelectionOnClick: true,
    ...gridProps,
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <input
        type="text"
        placeholder="Filter..."
        onChange={e => handleFilter(e.target.value)}
      />
      <DataGrid
        rows={filteredRows}
        columns={tableColumns}
        {...dataGridProps}
      />
    </div>
  );
};

export default DataTable;
