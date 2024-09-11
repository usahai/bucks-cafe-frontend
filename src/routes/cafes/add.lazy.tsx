import AddCafe from "../../components/AddCafe";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cafes/add")({
  component: () => <AddCafe />,
});
