import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./style.css";

const CameraScan = () => {
  const [data, setData] = useState("");
  const [noti, setNoti] = useState(false);

  const handleCoppy = () => {
    navigator.clipboard.writeText(data).then(setNoti(true));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNoti(false);
  };
  return (
    <>
      <div className="containerRecord">
        <QrReader
          scanDelay={600}
          onResult={(result) => {
            if (!!result) {
              setData(result?.text);
            }
          }}
          style={{ backgroundColor: "#333333 !important" }}
          ViewFinder={() => (
            <div
              style={{
                display: "flex",
                zIndex: 99,
                height: "88%",
                width: "100%",
                position: "absolute",
                top: 0,
              }}
              className="box-scan"
            />
          )}
        />
      </div>
      <TextField
        sx={{ mx: "auto", mt: "2rem", mb: "1rem" }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <ContentCopyIcon
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  background: "#c9c7c7",
                  borderRadius: "4px",
                },
              }}
              onClick={handleCoppy}
            />
          ),
        }}
        fullWidth
        multiline
        label="Text"
        value={data}
      />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={noti} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="success">Copied!</Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default CameraScan;
