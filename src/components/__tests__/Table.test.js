import { render, screen, cleanup } from "@testing-library/react";
import Table from "../Table";
import { Provider as ReduxProvider } from "react-redux";
import { store as reduxStore } from "../../utils/store";
import { HashRouter, Routes } from "react-router-dom";

test("Should render users table", () => {
  render(
    <ReduxProvider store={reduxStore}>
      <HashRouter>
        <Table />
      </HashRouter>
    </ReduxProvider>
  );
  const tableElement = screen.getByTestId("users-table");
  expect(tableElement).toBeInTheDocument();
});
