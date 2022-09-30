import { useParams } from "react-router-dom";
import { useGetCurrentUserQuery } from "../utils/api";
import { Card, CardHeader, CardContent } from "@mui/material";
import GenericContainer from "../components/GenericContainer";
import UserAvatar from "../components/UserAvatar";
// import TextField from "@mui/material/TextField";
// import { useSelector } from "react-redux";

// -------------------------------------
//  USER PROFILE PAGE
// -------------------------------------

// const USERS = [];

export default function UserProfile() {
  const { userid } = useParams();
  const {
    data = {},
    isLoading,
    refetch,
  } = useGetCurrentUserQuery({ id: userid });

  //
  //  Redux useSelector approach > no slicer required
  //
  /* const users = useSelector(
    (state) => state.usersAdmin.queries["getUsers(undefined)"].data
  );
  debugger;
  const user = users.find((user) => parseInt(user.id) === parseInt(userid)); */
  //
  //

  console.log(data);

  return (
    <GenericContainer width={"sm"}>
      <Card>
        <CardHeader avatar={<UserAvatar image={"A"} />} title={data.name} />
        <CardContent>
          <h3>Id: {data.id}</h3>
          <h3>Name: {data.name}</h3>
          <h3>Email: {data.email}</h3>
          <h3>Gender: {data.gender}</h3>
          <h3>Address: {data.address}</h3>
          <h3>Status: {data.status}</h3>
          <h3>UUID: {data.uuid}</h3>
          {/* TEXTFIELDS FOR EDIT USER
          <TextField
            disabled
            label="NAME"
            defaultValue={data.name}
            margin="normal"
          />
          <TextField disabled label="ID" defaultValue="01" margin="normal" />
          <TextField
            disabled
            label="EMAIL"
            defaultValue={data.email}
            margin="normal"
          />
          <TextField
            disabled
            label="GENDER"
            defaultValue={data.gender}
            margin="normal"
          />
          <TextField
            disabled
            label="ADDRESS"
            defaultValue={data.address}
            margin="normal"
          />
          <TextField
            disabled
            label="STATUS"
            defaultValue={data.isActive}
            margin="normal"
          />
 */}{" "}
        </CardContent>
      </Card>

      {/* <GenericButton color={"red"}>Close</GenericButton> */}
    </GenericContainer>
  );
}
