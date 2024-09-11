import {
  CellClickedEvent,
  type ColDef,
  type SizeColumnsToFitGridStrategy,
} from "ag-grid-community";
import { useMemo } from "react";
import { EmployeeDetails } from "@/types/employees";
import { AgGridReact } from "ag-grid-react";
import { useSearch } from "@tanstack/react-router";
import useGetEmployees from "../../hooks/useGetEmployees";
import styles from "./index.module.css";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { RouterButton } from "../ui/Button";
import EmployeeActionsRenderer from "./employeeActionsRenderer";

function Employees() {
  const { cafe } = useSearch({ from: "/employees/" });
  const { data, isFetching, isRefetching } = useGetEmployees(cafe);

  console.log("[EMP] data:", data, cafe);

  const columnDefs: ColDef<EmployeeDetails>[] = [
    {
      field: "emp_id",
      resizable: false,
      headerName: "Employee Id",
    },
    {
      field: "emp_name",
      resizable: false,
      headerName: "Name",
    },
    {
      field: "email_address",
      resizable: false,
      headerName: "Email",
    },
    {
      field: "phone_number",
      resizable: false,
      headerName: "Phone number",
    },
    {
      field: "days_worked",
      resizable: false,
      headerName: "Days worked",
    },
    {
      field: "cafe_name",
      resizable: false,
      headerName: "Cafe",
    },
    {
      field: "cafe_emp_id",
      resizable: false,
      cellRenderer: EmployeeActionsRenderer,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cellRendererParams: (params: any) => {
        return { emp_id: params.data.emp_id };
      },
      headerName: "Actions",
    },
  ];

  const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy>(() => {
    return {
      type: "fitGridWidth",
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: "country",
          minWidth: 900,
        },
      ],
    };
  }, []);

  const handleCellClicked = (
    event: CellClickedEvent<EmployeeDetails> & Event
  ) => {
    console.log("[EMP] event:", event);
    if (event.colDef.field === "cafe_emp_id") {
      event.stopPropagation();
    }
  };

  return (
    <div>
      <div className={styles.addNewBtnContainer}>
        <RouterButton
          variant="contained"
          className={styles.addNewBtn}
          to="/employees/add"
        >
          Add new Employee
        </RouterButton>
      </div>

      <div
        className="ag-theme-quartz-dark" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          autoSizeStrategy={autoSizeStrategy}
          loading={isFetching || isRefetching}
          onCellClicked={handleCellClicked}
        />
      </div>
    </div>
  );
}

export default Employees;
