function generateQRCode() {
  const el = document.getElementById("qrcode");
  const dataInput = document.getElementById("dataInput");
  const data = dataInput.value;

  if (el) {
    el.replaceChildren(); // Clear previous QR code if any
    const qrcode = new QRCode(el, {
      text: data,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } else {
    console.error('QR container element with id "qrcode" not found');
  }
}
