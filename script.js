
let grade = Number(prompt("Enter Your GRADES"))
if(grade <=100 && grade >= 90){
    alert(`Your Marks are ${grade} and you have GRADE A.`)
}
else if(grade<90 && grade>=80){
    alert(`Your Marks are ${grade} and you have GRADE B.`)
}
else if(grade<80 && grade>=70){
    alert(`Your Marks are ${grade} and you have GRADE C.`)
}
else if(grade<70 && grade>=60){
    alert(`Your Marks are ${grade} and you have GRADE D.`)
}
else if(grade<60 && grade>=0){
    alert(`Your Marks are ${grade} and you have FAILED.`)
}
else{
    alert("INVALID MARKS!!!")
}