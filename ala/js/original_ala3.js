let generatedMAC = "";
async function generateMAC() {
    const msg = document.getElementById("senderMsg").value;
    const key = document.getElementById("senderKey").value;
    if (!msg || !key) {
        alert("Enter message and key");
        return;
    }
    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        enc.encode(key),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const mac = await crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        enc.encode(msg)
    );
    generatedMAC = Array.from(new Uint8Array(mac))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    document.getElementById("senderMac").innerText = generatedMAC;
    // Auto send to receiver (same as original behavior)
    document.getElementById("receiverMsg").value = msg;
    document.getElementById("receiverKey").value = key;
}
async function verifyMAC() {
    const msg = document.getElementById("receiverMsg").value;
    const key = document.getElementById("receiverKey").value;
    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        enc.encode(key),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const mac = await crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        enc.encode(msg)
    );
    const newMAC = Array.from(new Uint8Array(mac))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    const result = document.getElementById("result");
    if (newMAC === generatedMAC) {
        result.innerHTML = "<div class='alert alert-success'>Message Authenticated</div>";
    } else {
        result.innerHTML = "<div class='alert alert-danger'>Message Tampered</div>";
    }
}
function goTo(page) {
    window.location.href = page;
}