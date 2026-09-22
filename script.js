// 1. Inversão Digital de Senha
function inverterSenha(senha) {
  return senha.split('').map(char => {
    if (char >= '0' && char <= '9') {
      return (9 - parseInt(char)).toString();
    }
    return char;
  }).join('');
}

function executarInversao() {
  const input = document.getElementById('senhaInput').value;
  const resultado = inverterSenha(input);
  document.getElementById('resultadoInversao').innerText = `Nova senha: ${resultado}`;
}

// 2. Mapeamento ASCII de Contato
function executarASCII() {
  const nome = document.getElementById('nomeInput').value;
  const lista = document.getElementById('resultadoASCII');
  lista.innerHTML = '';

  for (let char of nome) {
    const li = document.createElement('li');
    li.innerText = `'${char}' = ${char.charCodeAt(0)}`;
    lista.appendChild(li);
  }
}

// 3. Função Codifica Expandida
function codifica(texto, chave) {
  let resultado = '';
  
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    
    // Minusculas
    if (charCode >= 97 && charCode <= 122) {
      resultado += String.fromCharCode(((charCode - 97 + chave) % 26 + 26) % 26 + 97);
    }
    // Maiusculas
    else if (charCode >= 65 && charCode <= 90) {
      resultado += String.fromCharCode(((charCode - 65 + chave) % 26 + 26) % 26 + 65);
    }
    // Numeros
    else if (charCode >= 48 && charCode <= 57) {
      resultado += String.fromCharCode(((charCode - 48 + chave) % 10 + 10) % 10 + 48);
    }
    // Outros caracteres
    else {
      resultado += texto[i];
    }
  }
  
  return resultado;
}

function executarCodificacao() {
  const texto = document.getElementById('textoCodificar').value;
  const chave = parseInt(document.getElementById('chaveShift').value) || 0;
  const resultado = codifica(texto, chave);
  document.getElementById('resultadoCodificacao').innerText = `Resultado: ${resultado}`;
}

// 4. Função de Hash e Colisão
function calculaHash(palavra) {
  let hash = 0;
  for (let i = 0; i < palavra.length; i++) {
    hash += palavra.charCodeAt(i);
  }
  return hash;
}

function executarHash() {
  const p1 = document.getElementById('palavra1').value;
  const p2 = document.getElementById('palavra2').value;
  
  const hash1 = calculaHash(p1);
  const hash2 = calculaHash(p2);
  
  let msg = `Hash("${p1}") = ${hash1} | Hash("${p2}") = ${hash2}. `;
  if (hash1 === hash2 && p1 !== p2) {
    msg += "Ocorreu uma colisão de hash! Duas palavras diferentes geraram o mesmo valor.";
  } else if (p1 === p2) {
    msg += "As palavras são idênticas. Digite palavras diferentes para testar colisão (ex: 'roma' e 'amor').";
  } else {
    msg += "Os valores de hash são diferentes.";
  }
  
  document.getElementById('resultadoHash').innerText = msg;
}

// Execução inicial ao carregar a página
window.onload = function() {
  executarInversao();
  executarASCII();
  executarCodificacao();
  executarHash();
};