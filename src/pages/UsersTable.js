import GenericContainer from "../components/GenericContainer";
import Table from "../components/Table";

// -------------------------------------
//  USERS TABLE PAGE
// -------------------------------------

export default function UsersTable() {
    return (
      <GenericContainer width={"lg"}>
        <h1>LV USERS MANAGEMENT APP</h1>
        <Table />
      </GenericContainer>
    )
}

