const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input");
genBtn = document.querySelector(".form button");
qrImg = document.querySelector(".qr-code img");

genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    genBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        genBtn.innerText = "Generate QR Code...";
    });
    
});

qrInput.addEventListener("keyup", () => {
    if(!qrValue.value) {
        wrapper.classList.remove("active");
    }
});