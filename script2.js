var result = document.getElementById('result');

function insert(num) {
  result.value += num;
}

function calculate() {
  if (result.value.includes("sin(")) {
    var x = result.value.replace("sin(", "");
    result.value = Math.sin(x);
  } else if (result.value.includes("cos(")) {
    var y = result.value.replace("cos(", "");
    result.value = Math.cos(y);
  } else if (result.value.includes("tan(")) {
    var z = result.value.replace("tan(", "");
    result.value = Math.tan(z);
  }
    else if(result.value.includes("sqrt(")){
      var z1 = result.value.replace("sqrt(" , "")
      result.value = Math.sqrt(z1)

  }
    else if(result.value.includes("log(")){
      var z2 = result.value.replace("log(", "")
      result.value = Math.log(z2)
  }
    else if(result.value.includes("PI")){
      var z3 = result.value.replace("PI", "");
      result.value = 22/7;

  }
    else if(result.value.includes("%")){
      var z4 = result.value.replace("%", "");
      result.value = 1/100
  }

    else {
    result.value = eval(result.value);
  }
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}
