import GenericContainer from "../components/GenericContainer";
import GenericButton from "../components/GenericButton";
import UserAvatar from "../components/UserAvatar";
import { Card, CardHeader, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";

// -------------------------------------
//  USER PROFILE PAGE
// -------------------------------------

export default function UserProfile() {
  return (
    <GenericContainer width={"sm"}>
      <Card>
        <CardHeader
          avatar={<UserAvatar image={"A"} />}
          title={"User Full Name"}
        />
        <CardContent>
          <TextField
            disabled
            label="NAME"
            defaultValue="Full Name"
            margin="normal"
          />
          <TextField disabled label="ID" defaultValue="01" margin="normal" />
          <TextField
            disabled
            label="EMAIL"
            defaultValue="email@email.co"
            margin="normal"
          />
          <TextField
            disabled
            label="GENDER"
            defaultValue="Femenine"
            margin="normal"
          />
          <TextField
            disabled
            label="ADDRESS"
            defaultValue="Street 1234"
            margin="normal"
          />
          <TextField
            disabled
            label="STATUS"
            defaultValue="ACTIVE"
            margin="normal"
          />
        </CardContent>
      </Card>

      {/* <GenericButton color={"red"}>Close</GenericButton> */}
    </GenericContainer>
  );
}
