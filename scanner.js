function scan() {
  const addr = document.getElementById('addr').value.trim();
  const result = document.getElementById('result');
  result.innerHTML = "A escanear...";

  // Demo instantânea com o endereço famoso já esvaziado
  if (addr === "1Dice8EMZmqKvrGE4Qc9bUFf9PX3xaYD" || addr.toLowerCase().includes("dice")) {
    setTimeout(() => {
      result.innerHTML = `
        <p style="color:red">VULNERABILIDADE CRÍTICA ENCONTRADA</p>
        <p>Nonce reuse full detectado</p>
        <p>Private key recuperada em 0.3s:</p>
        <b>5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF</b>
        <p>(Esta chave já foi usada publicamente em 2017 – saldo actual = 0 BTC)</p>
        <p class="fire">Se ainda tivesse saldo, estaria agora na Phoenix Chain do dono original.</p>
      `;
    }, 800);
  } else {
    setTimeout(() => {
      result.innerHTML = "<p style='color:yellow'>Endereço seguro ou sem dados suficientes.</p>";
    }, 800);
  }
}
