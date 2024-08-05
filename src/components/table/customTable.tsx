import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import theme from "../../theme";
import TableSkeleton from "./skeletonTable";
import { FC } from "react";

type DataRow = {
  [key: string]: any;
};

interface TableProps {
  columns: GridColDef<DataRow>[]; 
  data: DataRow[];
  loading: boolean;
}

export const StyledTable: FC<TableProps> = ({ columns, data, loading }) => {
  return loading ? (
    <TableSkeleton />
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center !important",
        paddingInline: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={data || []}
        columns={columns}
        rowHeight={55}
        sx={{
          height: 600,
          boxShadow: 5,
          "& .MuiDataGrid-container": {
            background: theme.palette.common.white,
            color: theme.palette.common.white,
          },
          "& .MuiDataGrid-container--top [role=columnheader],": {
            background: `${theme.palette.secondary.main} !important`,
            color: theme.palette.common.white,
          },
          "& .MuiDataGrid-filler": {
            background: `${theme.palette.secondary.main} !important`,
          },
          "& .MuiDataGrid-scrollbarFiller": {
            background: `${theme.palette.secondary.main} !important`,
          },
          "& .MuiDataGrid-row": {
            background: theme.palette.common.white,
            color: theme.palette.common.black,
            "&:hover": {
              background: `${theme.palette.grey[200]} !important`,
            },
          },
          "& .MuiDataGrid-sortIcon": {
            color: theme.palette.common.white,
          },
          "& .MuiSvgIcon-root": {
            color: theme.palette.common.white,
          },
          "& .MuiTablePagination-selectLabel": {
            color: theme.palette.common.white,
          },
          "& .MuiTablePagination-displayedRows": {
            color: theme.palette.common.white,
          },
          "& .MuiTablePagination-select": {
            color: theme.palette.common.white,
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
        rowSelection={false}
      />
    </Box>
  );
};
