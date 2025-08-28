// Ucapan selamat datang pakai prompt
window.onload = function() {
  const nama = prompt("Masukkan nama Anda:");
  if (nama) {
    document.getElementById("welcome").innerText = `Hi ${nama}, Welcome To Website`;
  }
};

// Form Validation & Submit Message
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const formResult = document.getElementById("formResult");
const resNama = document.getElementById("resNama");
const resEmail = document.getElementById("resEmail");
const resPhone = document.getElementById("resPhone");
const resPesan = document.getElementById("resPesan");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  // Validasi sederhana
  if (nama === "" || email === "" || phone === "" || pesan === "") {
    alert("Harap isi semua field!");
    return;
  }

  if (!/^[0-9]{10,13}$/.test(phone)) {
    alert("Nomor telepon harus angka (10-13 digit).");
    return;
  }

  // Jika valid, tampilkan pesan sukses
  successMsg.classList.remove("hidden");

  // Tampilkan data hasil input
  resNama.innerText = nama;
  resEmail.innerText = email;
  resPhone.innerText = phone;
  resPesan.innerText = pesan;
  formResult.classList.remove("hidden");

  // Reset form
  form.reset();

  // Hilangkan pesan sukses setelah beberapa detik (data tetap tampil)
  setTimeout(() => {
    successMsg.classList.add("hidden");
  }, 4000);
});
