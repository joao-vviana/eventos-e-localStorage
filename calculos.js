const calcButton = document.getElementById("btn_calcular");

    const inputValorBase = document.getElementById("valor_base");
    const inputValorTransporte = document.getElementById("valor_transporte");
    const inputValorAlimentacao = document.getElementById("valor_alimentacao");
    const inputValorReceita = document.getElementById("valor_receita");
    const inputValorAutomovel = document.getElementById("valor_automovel");
    const inputFaltas = document.getElementById("faltas");
    const inputDescontoTotal = document.getElementById("valor_descontos");
    const inputValorTotal = document.getElementById("valor_total");

    inputValorTotal.onkeyup;

calcButton.addEventListener("click", (event) => {
  calcular();
  salvaNoLocalStorage();
});

function calcular() {
  const valorReceita =
    Number(inputValorBase.value) +
    Number(inputValorTransporte.value) +
    Number(inputValorAlimentacao.value);

  inputValorReceita.value = valorReceita.toFixed(2);

  const valorDescontos =
    Number(inputValorAutomovel.value) + Number(inputFaltas.value);

  inputDescontoTotal.value = valorDescontos.toFixed(2);

  const total = valorReceita - valorDescontos;

  inputValorTotal.value = total.toFixed(2);
}

function salvaNoLocalStorage() {
  localStorage.setItem("inputValorBase", inputValorBase.value);
  localStorage.setItem("inputValorTransporte", inputValorTransporte.value);
  localStorage.setItem("inputValorAlimentacao", inputValorAlimentacao.value);
  localStorage.setItem("inputValorAutomovel", inputValorAutomovel.value);
  localStorage.setItem("inputValorReceita", inputValorReceita.value);
  localStorage.setItem("inputFaltas", inputFaltas.value);
  localStorage.setItem("inputDescontoTotal", inputDescontoTotal.value);
  localStorage.setItem("inputValorTotal", inputValorTotal.value);
}

function recuperaDaStorage() {
  inputValorBase.value = Number(localStorage.getItem("inputValorBase"));
  inputValorTransporte.value = Number(
    localStorage.getItem("inputValorTransporte")
  );
  inputValorAlimentacao.value = Number(
    localStorage.getItem("inputValorAlimentacao")
  );
  inputValorAutomovel.value = Number(
    localStorage.getItem("inputValorAutomovel")
  );
  inputValorReceita.value = Number(
    localStorage.getItem("inputValorReceita")
  ).toFixed(2);
  inputFaltas.value = Number(localStorage.getItem("inputFaltas"));
  inputDescontoTotal.value = Number(
    localStorage.getItem("inputDescontoTotal")
  ).toFixed(2);
  inputValorTotal.value = Number(
    localStorage.getItem("inputValorTotal")
  ).toFixed(2);
}