import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import QrCode from "react-qr-code";

function QrCodeComp() {
  const [search, setsearch] = useState("");
  const [generate, setgenerate] = useState(false);

  const handleGenerateClick = () => {
    setgenerate(true);
  };

  return (
    <>
      <Typography
        textAlign={"center"}
        marginTop={5}
        variant="h3"
        fontWeight={"bold"}
      >
        Qr Code Generator
      </Typography>
      <Box
        display={"flex"}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          label="Search Here..."
          fullWidth
          sx={{ marginTop: 3 }}
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        ></TextField>
        <Button onClick={handleGenerateClick} variant="contained">
          Generate
        </Button>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ marginTop: 4 }}
      >
        {generate && <QrCode value={search}></QrCode>}
      </Box>
    </>
  );
}

export default QrCodeComp;
