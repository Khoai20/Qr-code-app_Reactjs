import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CameraScan from "./components/CameraScan";
import UploadQr from "./components/UploadQr";

const ScannerScreen = () => {
  const [upload, setUpload] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography style={{ fontWeight: 600 }} variant="h6">
                QR Code Scanner or Reader
              </Typography>
            </Grid>
            <Grid item xs={1}>
              {!upload && (
                <RadioButtonCheckedIcon
                  onClick={() => setUpload(true)}
                  sx={{
                    color: "red",
                    position: "absolute",
                    right: "2%",
                    top: "1%",
                    "&:hover": { cursor: "pointer", color: "#000000" },
                  }}
                />
              )}
              {upload && (
                <CameraAltIcon
                  onClick={() => setUpload(false)}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "1.6%",
                    "&:hover": { cursor: "pointer", color: "red" },
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {!upload && <CameraScan />}
          {upload && <UploadQr />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScannerScreen;
