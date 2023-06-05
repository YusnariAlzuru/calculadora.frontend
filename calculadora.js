function calculator(input){
    var result = document.getElementById("result");
    // INPUT =
    // 2+2
    // C == c, es lo mismo
    // C === c, no es lo mismo. El triple = es más restrictivo
    if (input === "C"){
        result.value = "0";
    } else if (input === "="){
        result.value = eval(result.value); //eval ejecuta la operación aritmética
    } else {
        if (result.value === "0"){
            result.value = input;
        } else {
            result.value += input;
        }
    }
}