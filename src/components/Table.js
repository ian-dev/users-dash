import { useMemo, useState, useCallback } from "react";
import { useGetUsersQuery } from "../utils/api";
import { DataGrid } from "@mui/x-data-grid";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import Button from "@mui/material/Button";

// -------------------------------------
//  DATA GRID MUI
// -------------------------------------

const USERS = [];

export default function UsersTable() {
  const { data = USERS } = useGetUsersQuery();
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [selectedUser, setSelectedUser] = useState();
  const [updatedUsers, setUpdatesUsers] = useState([]);
  const userListHelper = useRef(USERS);
  const updatedUsersHelper = useRef(USERS);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    userListHelper.current = data;
    setUpdatesUsers(data);
  }, [data]);

  useEffect(() => {
    updatedUsersHelper.current = updatedUsers;
  }, [updatedUsers]);

  //
  // CLICK HANDLERS
  const viewClickHandler = (e) => {
    const element = e.target.parentNode.parentNode;
    const elementIndex = element.attributes.getNamedItem("data-rowindex").value;
    const users = userListHelper.current;

    navigate(`/users/${users[elementIndex].id}`);
  };

  const deleteClickHandler = (e) => {
    const element = e.target.parentNode.parentNode;
    const elementIndex = element.attributes.getNamedItem("data-rowindex").value;
    const users = userListHelper.current;

    setSelectedUser(users[elementIndex].id);
    setOpen(true);
  };

  const closeAlert = useCallback(() => setOpen(false), []);

  //
  // REMOVE USER FROM ALERT DIALOG CB
  const deleteSelectedUser = (id) => {
    // debugger;
    let users = updatedUsersHelper.current;
    users = users.filter((u) => u.id !== id);
    setUpdatesUsers(users);
    console.log(updatedUsers);
  };

  //
  //  MEMOIZED COLUMNS FOR TABLE
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
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={viewClickHandler}
            >
              View
            </Button>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={deleteClickHandler}
            >
              Delete
            </Button>
          </>
        ),
      },
    ],
    []
  );

  return (
    <div data-testid="users-table">
      <DataGrid
        rows={updatedUsers}
        columns={memoColumns}
        autoHeight={true}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 15, 30]}
        pagination
        {...data}
      />
      <AlertDialog
        isOpen={open}
        id={selectedUser}
        callback={closeAlert}
        userToDelete={deleteSelectedUser}
      />
    </div>
  );
}
