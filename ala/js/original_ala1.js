let privateKey, publicKey;
// Convert ArrayBuffer → Base64
function bufferToBase64(buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}
// Convert Base64 → ArrayBuffer
function base64ToBuffer(base64) {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}
async function generateKeys() {
    const keyPair = await crypto.subtle.generateKey(
        {
            name: "RSA-PSS",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"
        },
        true,
        ["sign", "verify"]
    );
    privateKey = keyPair.privateKey;
    publicKey = keyPair.publicKey;
    document.getElementById("privateKey").value = "Private Key Generated";
    document.getElementById("publicKey").value = "Public Key Generated";
}
async function signMessage() {
    const message = document.getElementById("messageInput").value;
    if (!message) {
        alert("Enter message first");
        return;
    }
    const encoded = new TextEncoder().encode(message);
    const signature = await crypto.subtle.sign(
        { name: "RSA-PSS", saltLength: 32 },
        privateKey,
        encoded
    );
    const sigBase64 = bufferToBase64(signature);
    document.getElementById("signatureInput").value = sigBase64;
}
async function verifySignature() {
    const message = document.getElementById("messageInput").value;
    const signature = document.getElementById("signatureInput").value;
    if (!message || !signature) {
        alert("Enter message and signature");
        return;
    }
    const encoded = new TextEncoder().encode(message);
    const sigBuffer = base64ToBuffer(signature);
    const isValid = await crypto.subtle.verify(
        { name: "RSA-PSS", saltLength: 32 },
        publicKey,
        sigBuffer,
        encoded
    );
    const banner = document.getElementById("resultBanner");
    if (isValid) {
        banner.innerHTML = "<div class='alert alert-success'>Signature Verified</div>";
    } else {
        banner.innerHTML = "<div class='alert alert-danger'>Invalid Signature</div>";
    }
}
function goTo(page) {
    window.location.href = page;
}