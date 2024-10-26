"use client";
import React from "react";
import { MaterialReactTable } from "material-react-table";
import { Button, Box } from "@mui/material";

type ReusableTableProps<DataType> = {
  columns: any;
  data: DataType[];
  onAdd?: () => void;
  onEdit?: (row: DataType) => void;
  onDelete?: (id: number) => void;
  action?: string;
  onFilterChange?: (query: string) => void; // Add this prop for server-side filtering
};

const ReusableTable = <DataType,>({
  columns,
  data,
  onAdd,
  action,
  onFilterChange, // Destructure the new prop
}: ReusableTableProps<DataType>) => {
  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={data}
        manualFiltering
        state={{
          globalFilter: "",
        }}
        onGlobalFilterChange={(value: string) => {
          if (onFilterChange) {
            onFilterChange(value); // Call the parent component's filter change handler
          }
        }}
        renderTopToolbarCustomActions={() => (
          <Box display="flex" justifyContent="space-between" gap={2}>
            {/* Add Role Button */}
            {action && (
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
          </Box>
        )}
      />
    </div>
  );
};

export default ReusableTable;