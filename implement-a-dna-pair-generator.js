//When given A, the function should pair it with T.
//When given T, the function should pair it with A.
//When given C, the function should pair it with G.
//When given G, the function should pair it with C.
//For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
function pairElement(str){
  let arr = [];
  for(let i = 0; i < str.length;i++){
    if(str[i] == "A"){
      arr.push(["A","T"]);
    } else if(str[i] == "T") {
      arr.push(["T","A"]);
    } else if(str[i] == "C") {
      arr.push(["C","G"]);
    } else if(str[i] == "G") {
      arr.push(["G","C"]);
    }
  }
 return arr;
}

console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))