function getAverage(arr){
let averageScore;
 let sum = 0;
for(let element in arr){
  sum += arr[element];
}
averageScore = sum/arr.length
return averageScore;
}

function getGrade(studentScore) {
let letterGrade = " "
  if(studentScore == 100){
     letterGrade = "A+";
  }
  else if(studentScore >= 90 &&    studentScore <=99){
    letterGrade = "A";
  }
  else if(studentScore >= 80 &&    studentScore <=89){
    letterGrade = "B";
  }
  else if(studentScore >= 70 &&    studentScore <=79){
    letterGrade = "C";
  }
  else if(studentScore >= 60 &&    studentScore <=69){
    letterGrade = "D";
  }
  else if(studentScore >= 0 && studentScore <=59){
    letterGrade = "F";
  }
  return letterGrade;
}

function hasPassingGrade(studentScore){
return (getGrade(studentScore) != "F");
}

function studentMsg(arr,studentScore){
  let message;
  let average = getAverage(arr);
  let grade = getGrade(studentScore);

  if(grade == "F"){
    message ="Class average: " + average + ". Your grade: " + grade + ". You failed the course."
  }
  else{
    message ="Class average: " + average + ". Your grade: " + grade + ". You passed the course."
  }
  return message;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))

console.log(getGrade(100))

console.log(hasPassingGrade(59))
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
