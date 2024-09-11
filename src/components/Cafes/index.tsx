import useGetCafes from "../../hooks/useGetCafes";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useMemo, useState } from "react";
import {
  CellClickedEvent,
  type ColDef,
  type SizeColumnsToFitGridStrategy,
} from "ag-grid-community";
import styles from "./index.module.css";
import { RouterButton } from "../ui/Button";
import { Cafe } from "../../types/cafes";
import EmployeeModal from "./EmployeeModal";
import { Employee } from "../../types/employees";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import CafeActionsRenderer from "./cafeActionsRenderer";

function Cafes() {
  const { data, isFetching, isRefetching } = useGetCafes();
  const [fileteredEmployeeData, setFilteredEmployeeData] = useState<
    (Employee & { cafe_id: string })[]
  >([]);
  const [open, setOpen] = useState<boolean>(false);

  const columnDefs: ColDef<Cafe>[] = [
    {
      field: "cafe_name",
      hide: false,
      resizable: false,
      headerName: "Cafe Name",
    },
    {
      field: "description",
      hide: false,
      resizable: false,
      headerName: "Description",
    },
    {
      field: "location",
      hide: false,
      resizable: false,
      headerName: "Location",
      filter: true,
    },
    {
      field: "cafe_id",
      resizable: false,
      // width: 100,
      cellRenderer: CafeActionsRenderer,
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

  const handleOpenModal = (id?: string) => {
    if (!id) window.alert("Error occurred");
    const cafe = data?.find(({ cafe }) => cafe.cafe_id === id);
    setFilteredEmployeeData(
      cafe?.employees.map((item) => ({
        ...item,
        cafe_id: cafe.cafe.cafe_id,
      })) ?? []
    );
    setOpen(true);
  };

  const handleCloseModal = () => {
    setFilteredEmployeeData([]);
    setOpen(false);
  };

  const handleCellClicked = (event: CellClickedEvent<Cafe> & Event) => {
    if (event.colDef.field === "cafe_id") {
      event.stopPropagation();
    } else {
      handleOpenModal(event?.data?.cafe_id);
    }
  };

  return (
    <div>
      <div className={styles.addNewBtnContainer}>
        <RouterButton
          variant="contained"
          className={styles.addNewBtn}
          to="/cafes/add"
        >
          Add new Cafè
        </RouterButton>
      </div>
      <div
        className="ag-theme-quartz-dark" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data?.map((item) => item.cafe)}
          columnDefs={columnDefs}
          autoSizeStrategy={autoSizeStrategy}
          loading={isFetching || isRefetching}
          onCellClicked={handleCellClicked}
        />
      </div>
      <EmployeeModal
        open={open}
        handleClose={handleCloseModal}
        data={fileteredEmployeeData}
      />
    </div>
  );
}

export default Cafes;
