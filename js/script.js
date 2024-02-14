const numero = Number( prompt ('Type one number/Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Square root/Raíz quadrada: ${numero ** 0,5} </p>`; 
texto.innerHTML += `<p>Is/É NaN: ${Number.isNaN(numero)} </p>`; 
texto.innerHTML += `<p>The number is integer/O número ${numero} é inteiro? ${Number.isInteger(numero)} </p>`; 
texto.innerHTML += `<p>Rounded up/Arredondado para cima: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Rounded down/Arredondado para baixo: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>With two decimal places/Com duas casas decimais: ${numero.toFixed(2)}</p>`;
