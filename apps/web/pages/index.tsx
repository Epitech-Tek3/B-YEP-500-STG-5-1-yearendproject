import React, { useEffect, useState } from "react";
import { Home } from "@views/home";
import { useRouter } from "next/router";
import { Alert, Snackbar } from "@mui/material";

const HomePage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(router.query?.e == "area-created");

  useEffect(() => {
    !open && router.query?.e == "area-created" && setOpen(true);
  }, [router.query]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
          Votre area a été crée avec success.
        </Alert>
      </Snackbar>
      <Home />
    </>
  );
};

export default HomePage;
