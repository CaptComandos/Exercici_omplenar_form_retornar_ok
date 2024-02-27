const btn = document.querySelector("button");
const div = document.querySelector("div");

btn.addEventListener("click", () => {
  const input = document.querySelector("input");
  if (input.value.length === 0) {
    div.innerHTML = "està buit!";
  } else {

    const url = "http://localhost:3003/introduir";

    fetch(url, {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email" : input.value
      })
    })
      .then(res => res.json())
      .then(mensaje => div.innerHTML = mensaje)
  }
});