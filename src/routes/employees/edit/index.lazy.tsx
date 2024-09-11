import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/employees/edit/")({
  component: () => (
    <div>
      Please select an employee to edit from the{" "}
      <a href="/employees">employees</a> page
    </div>
  ),
});
