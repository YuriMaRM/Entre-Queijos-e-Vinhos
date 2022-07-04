


function validateName(){//função para validar o name do usuario 
 
    var textName = document.getElementById("enableName");
    var userNameValue = textName.value;
    
    if(userNameValue === ''){// verificando se o campo do nome está vazio 
       document.getElementById("enableName").style.borderColor = "red";
    }else{
        document.getElementById("enableName").style.borderColor = "green";
    }

}

function validateCpf(){// função para validar o CPF

    var numberCpf = document.getElementById('enableCpf');
    var userCpfValue = numberCpf.value;
    if(TestaCPF(userCpfValue)){//chamada da função para teste de validação do CPF
       document.getElementById("enableCpf").style.borderColor = "green";
       } else{
        document.getElementById("enableCpf").style.borderColor = "red";
       }
}

function TestaCPF(strCPF) {// função para teste de validação do CPF
    var soma;
    var resto;
    soma = 0;
  if (strCPF == "00000000000"){//primeira verificação
   return false;
  }
  for (i=1; i<=9; i++){ 
    soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);//somando o valor de todos os caracteres
  }
  resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){  
        resto = 0;
    }
    if (resto != parseInt(strCPF.substring(9, 10)) ){ 
        return false;
    }
  soma = 0;//segunda verificação 
    for (i = 1; i <= 10; i++){ 
        soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }
        resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){  
        resto = 0;
    }
    if (resto != parseInt(strCPF.substring(10, 11) ) ){ 
        return false;
    }
    return true;
}

function validateGenero(){//função para validar o genero do usuario

    var userGenero = document.getElementById('enableGenero');
    var userGeneroValue = userGenero.value;
    if(userGeneroValue !=''){
        document.getElementById("enableGenero").style.borderColor = "green";
    }

}


function validateEmail(){//função  para validar o email

var userEmail = document.getElementById('enableEmail');
var userEmailValue = userEmail.value;
if(userEmailValue ==''){
    document.getElementById("enableEmail").style.borderColor = "red";
}else if(document.forms[0].enableEmail.value.indexOf('@')==-1 || document.forms[0].enableEmail.value.indexOf('.')==-1 ){
  }else{
    document.getElementById("enableEmail").style.borderColor = "green";

}
}

function validateData(){//função para validar a data de nascimento do usuario 

    var userData = document.getElementById('enableData');
    var userDataValue = userData.value;
    var dateConsole = new Date ();//pegando a data do console
    var yearConsole = dateConsole.getFullYear();//pegando agora somente o ano do console
    var yearUserString = userDataValue;
    yearUserString = String(yearUserString);//convertendo valor da data de nascimento do usuario para um string
    yearNumberUser = parseInt(yearUserString);
    if(yearNumberUser > yearConsole){// verificando se o ano do usuario é maior que o ano do console
        document.getElementById("enableData").style.borderColor = "red";
    }else{
        document.getElementById("enableData").style.borderColor = "green";
    }
}

 function validateTel(){

    
    var userTel = document.getElementById('enableTel');
    var userTelValue = userTel.value;
    if (userTelValue.length == 10 && /^[0-9]+$/.test(userTelValue)){
        document.getElementById("enableTel").style.borderColor = "green";
    }else{
        document.getElementById("enableTel").style.borderColor = "red";
    } 


 }




