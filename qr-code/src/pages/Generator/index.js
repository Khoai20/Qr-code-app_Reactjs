import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import DownloadIcon from "@mui/icons-material/Download";
import "./style.css";

const GeneratorScreen = () => {
  const [textForm, setTextForm] = useState();

  const handleCreateQrCode = (e) => {
    setTextForm(e.target.value);
  };

  const handleDowload = () => {
    const canvas = document.getElementById("QrCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log("pngUrl", pngUrl);
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "New QrCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Box>
      <Typography style={{ fontWeight: 600 }} variant="h6">
        QR Code Generator
      </Typography>
      <Typography variant="subtitle2">
        You need to enter your text to generate the QR code
      </Typography>
      <TextField
        sx={{ mx: "auto", mt: "2rem", mb: "1rem" }}
        fullWidth
        multiline
        onChange={handleCreateQrCode}
        label="Text"
      />
      {textForm && (
        <>
          <div className="containerQr">
            <QRCodeCanvas
              id="QrCode"
              imageSettings={{ src: {} }}
              size={250}
              value={textForm}
            />
          </div>
          <Button
            onClick={handleDowload}
            sx={{ letterSpacing: "5px" }}
            fullWidth
            variant="outlined"
          >
            DOWLOAD
            <DownloadIcon sx={{ ml: "1rem" }} />
          </Button>
        </>
      )}
    </Box>
  );
};

export default GeneratorScreen;
