import { render, screen } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { store as reduxStore } from "./utils/store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <ReduxProvider store={reduxStore}>
      <App />
    </ReduxProvider>
  );
});
