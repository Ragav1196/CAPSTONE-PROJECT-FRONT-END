import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { copyStyles } from "react-to-print";
import { Home } from "./HOME PAGE/Home";
import Button from "@mui/material/Button";
import { Links } from "../Links";
// import { Links } from "../PDF/Links";

export const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <section className="PDF">
      <div style={{ display: "none" }}>
        <Home ref={componentRef} />
      </div>
      <Button
        id="PDFPrintButton"
        onClick={handlePrint}
        variant="contained" /* endIcon={} */
      >
        Print
      </Button>
      {/* <button onClick={handlePrint}>Print this out!</button> */}
    </section>
  );
};
