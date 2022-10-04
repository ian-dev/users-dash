import { useMemo, useState } from "react";
import { useGetUsersQuery } from "../utils/api";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// -------------------------------------
//  DATA GRID MUI
// -------------------------------------

const USERS = [];

export default function UsersTable() {
  const { data = USERS, isLoading, refetch } = useGetUsersQuery();
  const userListHelper = useRef(USERS);
  const navigate = useNavigate();

  useEffect(() => {
    userListHelper.current = data;
  }, [data]);

  // CLICK HANDLERS
  const viewClickHandler = (e) => {
    // debugger;
    const element = e.target.parentNode.parentNode;
    const elementIndex = element.attributes.getNamedItem("data-rowindex").value;
    const users = userListHelper.current;

    navigate(`/users/${users[elementIndex].id}`);
  };

  // const removeClickHandler = () => {};

  const memoColumns = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 1, minWidth: 25 },
      { field: "name", headerName: "NAME", flex: 2, minWidth: 150 },
      { field: "email", headerName: "EMAIL", flex: 2, minWidth: 150 },
      { field: "gender", headerName: "GENDER", flex: 2, minWidth: 150 },
      { field: "isActive", headerName: "STATUS", flex: 1, minWidth: 150 },
      {
        field: "actions",
        headerName: "ACTIONS",
        flex: 1,
        minWidth: 150,
        renderCell: (params) => (
          <>
            <Button variant="contained" size="small" onClick={viewClickHandler}>
              View
            </Button>
          </>
        ),
      },
    ],
    []
  );

  // set on event
  const [pageSize, setPageSize] = useState(10);

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
    />
  );
}
