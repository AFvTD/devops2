function isEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPasswordValid(password){
  if(password == "root1234"){
    return true;
  }
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    isEmail(email) && isPasswordValid(password) ? alert(`Zalogowano jako: ${email}`) : alert("Nieprawidłowy adres email");
  });
});
