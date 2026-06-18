// --- JAVASCRIPT ---
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Alternatif Linktree siap digunakan!");
    
    // Menganalisis link mana yang diklik user (output di inspect element console)
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Mengambil teks dari element yang diklik
            const linkText = e.currentTarget.textContent.trim();
            console.log(`User mengklik link: "${linkText}" menuju ke: ${e.currentTarget.href}`);
        });
    });
});
