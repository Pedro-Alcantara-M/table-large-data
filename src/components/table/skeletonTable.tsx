import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Skeleton,
  TableBody,
  useTheme,
} from "@mui/material";

const TableSkeleton = () => {
    const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        paddingLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Table
        sx={{
          border: `0.3px solid ${theme.palette.primary.contrastText}`,
          brigthness: 0.5,
          boxShadow: 5,
          "& .MuiTableCell-root": { borderBottom: "none" },
        }}
      >
        <TableHead>
          <TableRow>
            {Array.from({ length: 7 }).map((_, index) => (
              <TableCell key={index} align="center">
                <Skeleton variant="text" height={20} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 7 }).map((_, index) => (
            <TableRow key={index} sx={{ borderBottom: "none !important" }}>
              {Array.from({ length: 7 }).map((_, index) => (
                <TableCell key={index} align="center">
                  <Skeleton variant="rectangular" height={30} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableSkeleton;
