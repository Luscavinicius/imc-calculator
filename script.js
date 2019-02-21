document.getElementById('calculate').addEventListener("click", calculateIMC);

function calculateIMC (){
  const output = document.getElementById("result");
  const output2 = document.getElementById("result-type");

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  height /= 100;

  let result = weight / (height * height);
  result = result.toFixed(2);

  if(result < 17){
    output.innerHTML = result;
    output2.innerHTML = "Muito abaixo do peso."

  } else if (result >= 17 && result < 18.5) {
    output.innerHTML = result;
    output2.innerHTML = "Abaixo do peso."

  } else if (result >= 18.5 && result < 25) {
    output.innerHTML = result;
    output2.innerHTML = "Peso normal."

  } else if (result >= 25 && result < 30) {
    output.innerHTML = result;
    output2.innerHTML = "Acima do peso."

  } else if (result >= 30 && result < 35) {
    output.innerHTML = result;
    output2.innerHTML = "Obesidade I."

  } else if (result >= 35 && result < 40) {
    output.innerHTML = result;
    output2.innerHTML = "Obesidade II."

  }  else if (result >= 40) {
    output.innerHTML = result;
    output2.innerHTML = "Obesidade III."

  }

}
