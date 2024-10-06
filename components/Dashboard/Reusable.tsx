"use client";
import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button, Box } from "@mui/material";

type ReusableTableProps<DataType> = {
  columns: any;
  data: DataType[];
  onAdd?: () => void;
  onEdit?: (row: DataType) => void;
  onDelete?: (id: number) => void;
  action?: string;
};

const ReusableTable = <DataType,>({
  columns,
  data,
  onAdd,
  action,
}: ReusableTableProps<DataType>) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter the data manually based on the search query
  const filteredData = data.filter((row: any) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <MaterialReactTable
      columns={columns}
      data={filteredData}
      manualFiltering
      state={{
        globalFilter: searchQuery,
      }}
      onGlobalFilterChange={(value: string) => setSearchQuery(value)}
      renderTopToolbarCustomActions={() => (
        <Box display="flex" justifyContent="space-between" gap={2}>
        {/* Add Role Button */}
        {action && 
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
        }
        </Box>
      )}
      />
    </div>
  );
};

export default ReusableTable;