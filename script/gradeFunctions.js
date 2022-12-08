//Weights of assignments/exams
const weightDel = 20/3;
const weightMid = 35;
const weightFin = 45;

//Variables to hold averages of each section (Deliverables, Exams)
var dels = 0;
var exams = 0;

//Function to calculate the individual student's average of all deliverables
function avgDel(del1,del2,del3){
  dels = ((del1/100) + (del2/100) + (del3/100))/3;
  return dels*100;  
} 

//Function to calculate the individual student's average of all exams
function avgTests(midterm, final){
    exams = ((midterm/100)*weightMid +(final/100)*weightFin)/(weightMid + weightFin);
    return exams*100;
}

//Function to calculate the individual student's final grade
function finalGrade(dels,exams){
  return ((dels*weightDel*3)/100 + (exams*(weightMid + weightFin)/100));
}

//Variable to hold sum of student grades
var sum = 0; 

//Function to calculate the overall average grade of all students
function getAverage(arr){
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

//Function to calculate the standard deviation
function getStdDev(arr) {
  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b) / n;
  return Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}

//Function to calculate the median grade of all students
function getMedian(arr){
    arr.sort();
    if(arr.length % 2 == 0){
        return  (arr[arr.length/2 - 1] + arr[arr.length/2 + 1]);
    }
    else{
        return arr[(arr.length - 1)/2];
    }
}
