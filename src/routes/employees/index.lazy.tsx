import Employees from "../../components/Employees";
import { createLazyFileRoute } from "@tanstack/react-router";

interface EmployeesCafeSearch {
  cafe: string;
}

export const Route = createLazyFileRoute("/employees/")({
  validateSearch: (search: Record<string, string>): EmployeesCafeSearch => {
    return {
      cafe: search.cafe ?? undefined,
    };
  },
  component: () => <Employees />,
});
