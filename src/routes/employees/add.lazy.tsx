import AddEmployee from "../../components/AddEmployee";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/employees/add")({
  component: () => <AddEmployee />,
});
