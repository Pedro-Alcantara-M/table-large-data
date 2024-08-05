import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
      }}
    >
      <Typography
        variant="overline"
        style={{ fontWeight: "bold", fontSize: "24px", paddingInline: "10px" }}
        color="common.white"
      >
        Federal Motor Carrier Safety Administration
      </Typography>
    </Box>
  );
};

export default TopBar;
