import {
  ColDef,
  RowClickedEvent,
  SizeColumnsToFitGridStrategy,
} from "ag-grid-community";
import { Employee } from "../../types/employees";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "@tanstack/react-router";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "1rem",
};

function EmployeeModal({
  data,
  open,
  handleClose,
}: {
  data: (Employee & { cafe_id: string })[];
  open: boolean;
  handleClose: () => void;
}) {
  const navigate = useNavigate();
  const columnDefs: ColDef<Employee>[] = [
    { field: "emp_id", hide: true },
    { field: "emp_name", resizable: false, headerName: "Name" },
    { field: "phone_number", resizable: false, headerName: "Phone Number" },
    { field: "email_address", resizable: false, headerName: "Email Address" },
    { field: "start_date", resizable: false, headerName: "Start Date" },
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

  const handleRowClicked = (
    event: RowClickedEvent<Employee & { cafe_id: string }>
  ) => {
    const { data } = event;
    navigate({ to: "/employees", search: { cafe: data?.cafe_id ?? "" } });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cafe-employee-modal"
      aria-describedby="list-of-employees-in-cafe"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div
            className="ag-theme-quartz-dark" // applying the Data Grid theme
            style={{ height: 200 }} // the Data Grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={data}
              columnDefs={columnDefs}
              autoSizeStrategy={autoSizeStrategy}
              onRowClicked={handleRowClicked}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default EmployeeModal;
