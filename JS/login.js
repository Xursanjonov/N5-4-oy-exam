// Formni tanlang
const loginForm = document.getElementById("loginForm");

// Formni qabul qilish
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Foydalanuvchi ma'lumotlarini olish
  const emailOrPhone = document.getElementById("emailOrPhone").value;
  const password = document.getElementById("password").value;

  // localStorage.setItem("token", token); 

  // Token olish uchun API-ga so'rov yuborish
  try {
    const response = await fetch("API_URL/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailOrPhone, password }),
    });

    if (!response.ok) {
      throw new Error("Noto`g`ri kirish ma`lumotlari");
    }

    const { token } = await response.json();

    // Tokeni Local Storagega saqlash
    localStorage.setItem("token", token);

    // Admin sahifasiga o'tish
    window.location.href = "admin.html";
  } catch (error) {
    console.error(error.message);
  }
});
