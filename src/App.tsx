import { Box, Chip, Stack, Typography } from "@mui/material";
import {  GridColDef } from "@mui/x-data-grid";
import {  useMemo } from "react";
import { format } from "date-fns";
import { useGetTableData } from "./services/getTableData";
import TableSkeleton from "./components/table/skeletonTable";
import TopBar from "./components/topBar";
import { StyledTable } from "./components/table/customTable";

type DataRow = {
  [key: string]: any;
};

function formatDate(dateString: string): string {
  if (dateString == null) return dateString;
  const match = dateString.match(/Date\((\d+),(\d+),(\d+)\)/);

  if (!match) {
    return "Invalid date format";
  }

  const [, year, month, day] = match.map(Number);
  const date = new Date(year, month, day);

  return format(date, "MM/dd/yyyy");
}

const columns: GridColDef<DataRow[number]>[] = [
  {
    field: "created_dt",
    headerName: "Created_DT",
    sortable: true,
    width: 95,
    valueGetter: (value) => format(new Date(value), "MM/dd/yyyy"),
  },
  {
    field: "data_source_modified_dt",
    headerName: "Modifed_DT",
    width: 95,
    valueGetter: (value) => format(new Date(value), "MM/dd/yyyy"),
  },
  { field: "entity_type", headerName: "Entity", width: 90 },
  {
    field: "operating_status",
    headerName: "Operating Status",
    width: 125,
    renderCell: (value: any) => {
      if (value) {
        if (String(value?.value).includes("NOT AUTHORIZED")) {
          return <Chip size="small" label="Not Authorized" color="error" />;
        }

        if (String(value?.value).startsWith("AUTHORIZED")) {
          const parts = value?.value.split(" ");
          const authFor = parts.slice(1).join(" ");
          return (
            <Stack alignItems={"flex-start"} justifyItems={"center"} pt={1}>
              <Chip size="small" label="Authorized" color="info" />
              <Typography pl={0.5} variant="caption" color={"common.black"}>
                {authFor}
              </Typography>
            </Stack>
          );
        }
        return "-";
      }
    },
  },
  { field: "legal_name", headerName: "Legal Name", width: 150 },
  {
    field: "dba_name",
    headerName: "DBA Name",
    width: 150,
    valueGetter: (value) => value || "-",
  },
  { field: "physical_address", headerName: "Physical Address" },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "usdot_number", headerName: "DOT", width: 80 },
  {
    field: "mc_mx_ff_number",
    headerName: "MC/MX/FF",
    width: 100,
    valueGetter: (value) => value || "-",
  },
  { field: "power_units", headerName: "Power Units" },
  {
    field: "out_of_service_date",
    headerName: "Out of service date",
    width: 95,
    valueGetter: (value) => formatDate(value) || "-",
  },
];

function App() {
  const { data, loading } = useGetTableData();

  const tableData: any = useMemo(() => {
    return data?.data || [];
  }, [data?.data]);

  return (
    <Box
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        marginX: "auto",
      }}
    >
      <TopBar />
      {
        loading ? (
          <TableSkeleton />
        ) : (
         <StyledTable columns={columns} data={tableData} loading={loading}/>
        )
      }
    </Box>
  );
}

export default App;
