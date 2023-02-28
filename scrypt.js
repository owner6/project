
/*показывает сколько можно из дресесины произвести електроенергии*/
function FuelEnergyConverter(inputFuel) {
    document.getElementById("outputWood").innerHTML=inputFuel*3.8
    document.getElementById("outputCoal").innerHTML=inputFuel*7.5 
    document.getElementById("outputLiquidFuel").innerHTML=inputFuel*6     
}

//Когда рубить дерево. Категории деревьев
function know(){
  var woodElement,resultWood;
  woodElement = document.getElementById('wood-height').value
  resultWood = document.getElementById('wood-result')

  woodElement = parseInt(woodElement)
  
  if (woodElement==30) {
    resultWood.innerHTML = "Дерево пора рубить"}
  else if (woodElement>=20 && woodElement<=29) {
    resultWood.innerHTML = "Большое дерево"}
  else if (woodElement>=10 && woodElement<=19) {
    resultWood.innerHTML = "Среднее дерево"}
  else if (woodElement>=1 && woodElement<=9) {
    resultWood.innerHTML = "Маленькое дерево"}
  else if (woodElement>=31) {
    resultWood.innerHTML = "Таких деревьев не существует"}
  else {
    resultWood.innerHTML = "Нету дерева"}
}

//Итоговая оценка студента
function studentScores(){
  var examElement,projectsElement,finalGradeElement
  examElement = document.getElementById("exam-grade").value
  projectsElement = document.getElementById("projects-amount").value
  finalGradeElement = document.getElementById("student's-final-grade")
  
  examElement = parseInt(examElement);
  projectsElement = parseInt(projectsElement)
  
  if (examElement>90 || projectsElement>10) {
    finalGradeElement.innerHTML = 'Вы набрали 100 балов'}
  else if (examElement>75 && projectsElement>=5) {
    finalGradeElement.innerHTML = 'Вы набрали 90 балов'}
  else if (examElement>50 && projectsElement>=2) {
    finalGradeElement.innerHTML = 'Вы набрали 75 балов'} 
  else {finalGradeElement.innerHTML = 'Вы набрали 0 балов'}
}

//cумма последовательности чисел
function calculateSequenceSum (start, end) {
  
  if (start > end) return NaN
  if (start === end) return start
  return start + calculateSequenceSum(start + 1, end)
}

 function handleSecuenceSumBtnClick() {
  const startElement = document.getElementById("sequence-sum-start")
  const endElement = document.getElementById("sequence-sum-end")
  const resultElement = document.getElementById("sequence-sum-result")

  const start = parseInt(startElement.value)
  const end = parseInt(endElement.value)
  
  const result = calculateSequenceSum(start, end)
  
  resultElement.innerHTML = result
}

const sequenceSumButtonElement = document.getElementById("sequence-sum-btn")

function f1() {
  let element1 = document.getElementById("out");
  //заданное колличество повторений

let arr = []
for (let i = 0; i < 10; i = i + 1) {
  arr.push(Math.round(Math.random() * 10))
  
}
  element1.innerHTML = (arr)
}
