import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/Header";
import { Box } from "@mui/material";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      {/** Add header nav bar here */}
      <Header />
      <Box padding={"1rem"} height={"calc(100vh - 6rem)"}>
        <Outlet />
      </Box>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </React.Fragment>
  ),
});
