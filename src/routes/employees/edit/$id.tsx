import EditEmployee from "../../../components/EditEmployee";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/edit/$id")({
  component: () => <EditEmployee />,
});
