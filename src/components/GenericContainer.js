import { Container } from "@mui/material";

// -------------------------------------
//  GENERIC CONTAINER
// -------------------------------------

export default function GenericContainer({ width, children }) {
    return (
        <Container maxWidth={width}>{ children }</Container>   
    );
}