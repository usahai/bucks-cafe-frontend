import Employees from "../../components/Employees";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/")({
  validateSearch: (
    search?: Record<string, string>
  ): Record<string, string> | Record<string, never> => {
    return search
      ? {
          cafe_id: search?.cafe_id ?? undefined,
        }
      : {};
  },
  component: () => <Employees />,
});
