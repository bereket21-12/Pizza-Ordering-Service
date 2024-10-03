// ReusableTable.tsx
"use client";
import React from "react";
import { MaterialReactTable } from "material-react-table";
import { Button,} from "@mui/material";

type ReusableTableProps<DataType> = {
  columns: any; 
  data: DataType[];
  onAdd: () => void; 
  onEdit: (row: DataType) => void; 
  onDelete: (id: number) => void; 
  action : string;
};

const ReusableTable = <DataType,>({
  columns,
  data,
  onAdd,
  action
 
}: ReusableTableProps<DataType>) => {
  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={data}
        renderTopToolbarCustomActions={() => (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA500",
              color: "white",
              "&:hover": {
                backgroundColor: "#e69500",
              },
            }}
            onClick={onAdd}
          >
            {action}
          </Button>
        )}
      />
    </div>
  );
};

export default ReusableTable;
