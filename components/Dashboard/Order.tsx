import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useAbility } from "../../provider/AbilityContext";
import type { AppAbility } from '@/types/Appability';

interface ReusableTableProps<T> {
  columns: Array<{ accessorKey: string; header: string; permission?: string }>; 
  data: T[];
  abilities?: AppAbility;
  customButtonLabel?: string; 
}

const ReusableTable = <T extends object>({
  columns,
  data,
  abilities,
}: ReusableTableProps<T>) => {

  const userAbilities = useAbility();
  const effectiveAbilities = abilities || userAbilities;

  const filteredColumns = columns.filter((column) => {
    if (column && column.permission) {
      return effectiveAbilities.can('read', column.permission);
    }
    return true; 
  });

  return (
    <MaterialReactTable
      columns={filteredColumns}
      data={data}
    />
  );
};

export default ReusableTable;