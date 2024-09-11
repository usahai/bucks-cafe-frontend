import EditCafe from "../../../components/EditCafe";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cafes/edit/$id")({
  component: () => <EditCafe />,
});
