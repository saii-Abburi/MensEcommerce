
let loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", () => {
        loginBtn.innerText === "SignUp"
          ? (loginBtn.innerHTML = "Login")
          : (loginBtn.innerHTML = "SignUp");
      });
      let cart = document.getElementById("cart");
      cart.addEventListener("click", () => {
        if (
          document.getElementsByClassName("cart")[0].style.display === "block"
        ) {
          document.getElementsByClassName("cart")[0].style.display = "none";
        } else {
          document.getElementsByClassName("cart")[0].style.display = "block";
        }
      });