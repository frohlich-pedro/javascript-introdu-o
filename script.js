function verificarPar(num) {
    if (num % 2 === 0) {
        console.log('O número é par');
    } else {
        console.log('O número é ímpar');
    }
}

function calcular(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

let x = 10;
while (x < 0) {
    console.log(x);
    x--;
}

function inverterTexto(texto) {
    return texto.split('').reverse().join('');
}

function contarCaracteres(texto) {
    return texto.length;
}

const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2012
}
console.log(`${carro.marca} ${carro.modelo} ${carro.ano}`);

function mensagemPersonalizada(msg, nome) {
    console.log(`Olá, ${nome}, ${msg}`)
}

/*

fiz em C++ pq eu não faço ideia de como fazer isso, mals ae :(
correção, eu li errado, achei que tinha que “recriar o print” basicamente aceitar diversos argumentos e escrevê-los

#include <iostream>

void print() { return; }
template <typename T, typename... Args>
void print(const T& first, const Args&... args) {
    std::cout << first;
    if constexpr (sizeof...(args) > 0) {
        print(args...);
    }
}

int main() {
    print("Hello, ", "world!", 123, 4.56);
    return 0;
}

*/

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(`${i} é divisível por 3`);
    }
}

function verificarPalindromo (texto) {
    if (texto === (texto.split('').reverse().join(''))) {
        console.log(`${texto} é palíndromo`);
    }
}
