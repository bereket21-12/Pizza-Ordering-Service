"use client";
import React, { useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button, Box } from "@mui/material";

type ReusableTableProps<DataType> = {
  columns: any;
  data: DataType[];
  onAdd?: () => void;
  onEdit?: (row: DataType) => void;
  onDelete?: (id: number) => void;
  action?: string;
  onFilterChange: (params: {
    filters: { id: string; value: string | number | null }[];
    globalFilter: string;
  }) => Promise<void>;
};

const ReusableTable = <DataType,>({
  columns,
  data,
  onAdd,
  action,
  onFilterChange,
}: ReusableTableProps<DataType>) => {
  const [columnFilters, setColumnFilters] = React.useState<any[]>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        await onFilterChange({
          filters: columnFilters,
          globalFilter,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [columnFilters, globalFilter]);

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={data}
        manualFiltering
        state={{
          columnFilters,
          globalFilter,
        }}
        renderTopToolbarCustomActions={() => (
          <Box display="flex" justifyContent="space-between" gap={2}>
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
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
      />
    </div>
  );
};

export default ReusableTable;
