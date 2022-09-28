import { useMemo, useState } from "react";
import { useGetUsersQuery } from "../utils/api";
import { DataGrid } from "@mui/x-data-grid";
import GenericButton from "./GenericButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

// -------------------------------------
//  DATA GRID MUI
// -------------------------------------

const USERS = [];

const handleRowClick = (params) => {
  console.log(`User: ${params.row.uuid}`);
};

export default function UsersTable() {
  const { data = USERS, isLoading, refetch } = useGetUsersQuery();
  const columns = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 25 },
    { field: "name", headerName: "NAME", flex: 2, minWidth: 150 },
    { field: "email", headerName: "EMAIL", flex: 2, minWidth: 150 },
    { field: "gender", headerName: "GENDER", flex: 2, minWidth: 150 },
    { field: "isActive", headerName: "STATUS", flex: 1, minWidth: 150 },
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      minWidth: 70,
      renderCell: (params) => {
        <>
          <GenericButton icon={VisibilityIcon}></GenericButton>
          <GenericButton icon={RemoveCircleIcon}></GenericButton>
        </>;
      },
    },
  ];

  const memoColumns = useMemo(() => columns, []);

  const [pageSize, setPageSize] = useState(10);

  console.log(data);

  return (
    <DataGrid
      rows={data}
      columns={memoColumns}
      autoHeight={true}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 15, 30]}
      pagination
      {...data}
      onRowClick={handleRowClick}
    />
  );
}
