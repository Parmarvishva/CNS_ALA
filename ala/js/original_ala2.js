async function hashText(text, algo) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algo, data);

    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
async function analyzeHashes() {
    const original = document.getElementById("inputOg").value;
    const modified = document.getElementById("inputMod").value;
    if (!original || !modified) {
        alert("Enter both messages");
        return;
    }
    // SHA-1
    const ogSha1 = await hashText(original, "SHA-1");
    const modSha1 = await hashText(modified, "SHA-1");

    // SHA-256
    const ogSha256 = await hashText(original, "SHA-256");
    const modSha256 = await hashText(modified, "SHA-256");

    document.getElementById("ogSha1").innerText = ogSha1;
    document.getElementById("modSha1").innerText = modSha1;

    document.getElementById("ogSha256").innerText = ogSha256;
    document.getElementById("modSha256").innerText = modSha256;
}
function goTo(page) {
    window.location.href = page;
}