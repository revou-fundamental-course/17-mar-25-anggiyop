document.addEventListener("DOMContentLoaded", () => {
    const luasPersegi = document.getElementById("luasPersegi");
    const kelilingPersegi = document.getElementById("kelilingPersegi");
    const luasPersegiP = document.getElementById("luasPersegiP");
    const kelilingPersegiP = document.getElementById("kelilingPersegiP");
    const navButtons = document.querySelectorAll(".nav-tabs button");
    const sections = document.querySelectorAll(".calculator");

    navButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            sections.forEach(s => s.classList.remove("active"));
            sections[index].classList.add("active");
        });
    });

    luasPersegi?.addEventListener("submit", function (e) {
        e.preventDefault();
        const sisi = parseFloat(document.getElementById("sisiLuasP").value);
        if (!isNaN(sisi) && sisi >= 0) {
            const luas = sisi * sisi;
            document.getElementById("hasilLuasP").innerHTML = `L = S x S<br>L = ${sisi} x ${sisi}<br>L = ${luas}`;
        } else {
            alert("Masukkan nilai sisi yang valid (>= 0)");
        }
    });

    kelilingPersegi?.addEventListener("submit", function (e) {
        e.preventDefault();
        const sisi = parseFloat(document.getElementById("sisiKelilingP").value);
        if (!isNaN(sisi) && sisi >= 0) {
            const keliling = 4 * sisi;
            document.getElementById("hasilKelilingP").innerHTML = `K = 4 x S<br>K = 4 x ${sisi}<br>K = ${keliling}`;
        } else {
            alert("Masukkan nilai sisi yang valid (>= 0)");
        }
    });

    luasPersegiP?.addEventListener("submit", function (e) {
        e.preventDefault();
        const panjang = parseFloat(document.getElementById("panjangLuasPP").value);
        const lebar = parseFloat(document.getElementById("lebarLuasPP").value);

        if (!isNaN(panjang) && panjang >= 0 && !isNaN(lebar) && lebar >= 0) {
            const luas = panjang * lebar;
            document.getElementById("hasilLuasPP").innerHTML =
                `L = P x L<br>L = ${panjang} x ${lebar}<br>L = ${luas}`;
        } else {
            alert("Masukkan nilai panjang dan lebar yang valid (>= 0)");
        }
    });

    kelilingPersegiP?.addEventListener("submit", function (e) {
        e.preventDefault();
        const panjang = parseFloat(document.getElementById("panjangKelilingPP").value);
        const lebar = parseFloat(document.getElementById("lebarKelilingPP").value);

        if (!isNaN(panjang) && panjang >= 0 && !isNaN(lebar) && lebar >= 0) {
            const keliling = 2 * panjang + 2 * lebar;
            document.getElementById("hasilKelilingPP").innerHTML =
                `K = 2 x ( p + l )<br>K = 2 x (${panjang} + ${lebar})<br>K = ${keliling}`;
        } else {
            alert("Masukkan nilai panjang dan lebar yang valid (>= 0)");
        }
    });

    // Sidebar button
    const toggleBtn = document.getElementById("toggleSidebar");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("collapsed");
    });

    // Sidebar tab navigation
    const sideButtons = document.querySelectorAll(".nav-link");
    sideButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.target);
            document.querySelectorAll(".nav-tabs button")[index].click();
            sideButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Dark mode button
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

function resetForm(formId) {
    document.getElementById(formId)?.reset();

    const hasilMap = {
        luasPersegi: "hasilLuasP",
        kelilingPersegi: "hasilKelilingP",
        luasPersegiP: "hasilLuasPP",
        kelilingPersegiP: "hasilKelilingPP"
    };

    const hasilId = hasilMap[formId];
    if (hasilId) {
        document.getElementById(hasilId).innerHTML = "";
    }
}