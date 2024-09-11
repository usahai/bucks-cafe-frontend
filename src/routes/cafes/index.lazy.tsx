import Cafes from "../../components/Cafes";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cafes/")({
  component: () => <Cafes />,
});
