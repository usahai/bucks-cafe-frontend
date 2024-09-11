import { useParams } from "@tanstack/react-router";
import AddEmployee from "../AddEmployee";
import useGetEmployeeById from "../../hooks/useGetEmployeeById";
import { mapToEmployeeFormData } from "./_helpers";

function EditEmployee() {
  const { id } = useParams({ from: "/employees/edit/$id" });
  const { data } = useGetEmployeeById(id);

  return (
    <>
      {!!data && (
        <AddEmployee employeeData={mapToEmployeeFormData(data ?? [])} />
      )}
    </>
  );
}

export default EditEmployee;
