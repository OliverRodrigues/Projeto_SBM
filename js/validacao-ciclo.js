const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function botaoSalvar(){
    nameValidate();
    dateValidate();
}


function nameValidate(){
    if (campos[0].value.length < 3){
        console.log('NOME DEVE TER VALIDO')
        validateError(0);
    }
    else
    {
        console.log('NOME VALIDO')
        validateSucess(0)
    }
}

function dateValidate(){
    var data = campos[1].value.length
    if (data < 8){
        console.log('DATA DEVE TER VALIDO')
        validateError(1);
    }
    else
    {
        console.log('DATA VALIDA')
        validateSucess(1)
    }
}

function validateError(index)
{
    var campo = campos[index] 
    $( campo ).last().addClass( "error" ) 
}

function validateSucess(index)
{
    var campo = campos[index] 
    $( campo ).last().removeClass( "error" ) 
}