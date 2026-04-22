function showManual() {
document.getElementById("manualSection").style.display = "block";
document.getElementById("pdfSection").style.display = "none";
}

function showPDF() {
document.getElementById("manualSection").style.display = "none";
document.getElementById("pdfSection").style.display = "block";
}

function openALA(file) {
window.location.href = "ala/" + file;
}
