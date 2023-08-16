// function Mostrar()
// {
//     var txt = document.getElementById('txtValor');
//     var lbl = document.getElementById('lblValor');
//     console.log(txt.value);
//     console.log(lbl.innerText);

//     txt.value = 'le cambio!';
//     lbl.innerText = 'le cambio!';
// }

var valor = 0;

function mostrar()
{
    document.getElementById('lblValor').innerText = valor;
    document.getElementById('txtValor').value = valor;
}
function actualizar(valorIn)
{
    valor += valorIn;
    mostrar();
}

mostrar();