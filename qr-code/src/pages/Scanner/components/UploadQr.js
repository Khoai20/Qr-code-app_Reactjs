import React, { useState } from "react";
import { Box, Alert, Snackbar, Stack, TextField } from "@mui/material";
import axios from "axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const UploadQr = () => {
  const [textRender, setTextRender] = useState("");
  const [noti, setNoti] = useState(false);

  const handleCoppy = () => {
    navigator.clipboard.writeText(textRender).then(setNoti(true));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNoti(false);
  };

  const handleRender = async (file) => {
    setTextRender("");
    let formData = new FormData();
    formData.append("file", file);
    await axios
      .post("http://api.qrserver.com/v1/read-qr-code/", formData, headers: {
        'Access-Control-Allow-Origin': '*',
      })
      .then((res) => setTextRender(res.data[0]?.symbol[0]?.data));
  };

  function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }
  const { result, uploader } = useDisplayImage();

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#2590eb", mt: 2 }}>
        <div class="wrapper" style={{ zIndex: 99 }}>
          <div class="file-upload">
            <TextField
              inputProps={{ style: { height: "10rem" } }}
              sx={{
                height: "200px",
                width: "200px",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              fullWidth
              type="file"
              onChange={(e) => {
                handleRender(e.target.files[0]);
                uploader(e);
              }}
            />
            <ArrowUpwardIcon sx={{ fontSize: "smaller" }} />
          </div>
        </div>
        {result && (
          <img
            style={{
              position: "absolute",
              top: "13%",
              opacity: 0.4,
              height: "208px",
              objectFit: "fill",
              width: "100%",
            }}
            alt="ImageUpload"
            src={result}
            sx={{ zIndex: 8 }}
          />
        )}
      </Box>
      <TextField
        value={textRender}
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
      />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={noti} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="success">Copied!</Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default UploadQr;
