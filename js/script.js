// js/script.js

document.addEventListener("DOMContentLoaded", () => {
    const luasForm = document.getElementById("luasForm");
    const kelilingForm = document.getElementById("kelilingForm");
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
  
    luasForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const sisi = parseFloat(document.getElementById("sisiLuas").value);
      if (isValidInput(sisi)) {
        const luas = sisi * sisi;
        document.getElementById("hasilLuas").innerHTML = `L = S x S<br>L = ${sisi} x ${sisi}<br>L = ${luas}`;
      } else {
        alert("Masukkan nilai sisi yang valid (>= 0)");
      }
    });
  
    kelilingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const sisi = parseFloat(document.getElementById("sisiKeliling").value);
      if (isValidInput(sisi)) {
        const keliling = 4 * sisi;
        document.getElementById("hasilKeliling").innerHTML = `K = 4 x S<br>K = 4 x ${sisi}<br>K = ${keliling}`;
      } else {
        alert("Masukkan nilai sisi yang valid (>= 0)");
      }
    });
  });
  
  function resetForm(formId) {
    document.getElementById(formId).reset();
    const hasilId = formId === "luasForm" ? "hasilLuas" : "hasilKeliling";
    document.getElementById(hasilId).innerHTML = "";
  }
  
  function isValidInput(value) {
    return !isNaN(value) && value >= 0;
  }
  