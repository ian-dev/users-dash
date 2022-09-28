import { Button } from "@mui/material";

// -------------------------------------
//  GENERIC BUTTON
// -------------------------------------

export default function GenericButton({ icon, color, clickHandler }) {
  return (
    <Button color={color} clickHandler={clickHandler}>
      {icon}
    </Button>
  );
}
