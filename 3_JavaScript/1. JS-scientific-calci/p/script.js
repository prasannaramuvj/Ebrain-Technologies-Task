let display = document.getElementById('display');
let isdegree = true;

function calculate(){
  // let display = document.getElementById()

  let expression = display.value;

  try{
    if(isdegree){
      expression = expression.replace(/sin\(/g, 'sin('+ Math.PI / 180 +'*');
      expression = expression.replace(/cos\(/g, 'cos('+ Math.PI / 180 +'*');
      expression = expression.replace(/tan\(/g, 'tan('+ Math.PI / 180 +'*');


    }

  let result = math.evaluate(expression);
  display.value = result;
  }
  catch {
    display.value = 'error';
  }
}


function deletes(){
  display.value = display.value.slice(0,-1);
}