const form = document.querySelector(".form")

form.addEventListener("submit", e => {
    e.preventDefault()
    const nomeValue = document.getElementById('nome').value;
    const sobrenomeValue = document.getElementById('sobrenome').value;

    return;
});

/*
<form action="" class="form">
          <label for="nome" class="nome">Digite o seu nome:</label>
          <br>
          <input type="text" id="nome" class="input" placeholder="Primeiro Nome">
          <br>
          <label for="sobrenome" class="sobrenome">Digite o seu sobrenome:</label>
          <br>
          <input type="text" id="sobrenome" class="input" placeholder="Sobrenome">
          <br>
          <input type="submit" class="submit">
        </form>
*/