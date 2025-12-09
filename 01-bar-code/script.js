function makeBarcode() {
  const value = document.getElementById("inputData").value;
  JsBarcode("#barcode", value, {
    format: "CODE128",
    lineColor: "#0aa",
    width: 2,
    height: 100,
    displayValue: true,
  });
}
