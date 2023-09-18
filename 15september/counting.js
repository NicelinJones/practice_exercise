let countPeople=document.getElementById("count_people");
let savePeoplesentry=document.getElementById("save_peoplesentry");
let peoplesOut=document.getElementById("peoples_out");
let todayDate=document.getElementById("today_date");
    let nowTime=document.getElementById("nowtime");
    let employeeInOrOutTimeHour=document.getElementById("emp_inorout_timehour");
    let employeeInOrOutTimeMinutes=document.getElementById("emp_inorout_timeminutes")
    
    
let count=0;
function increment(){
    count += 1;
    countPeople.innerText=count;
save();
}
let bank=0;
function save(){
    bank=count+"("+new Date().getHours()+":"+new Date().getMinutes()+")";
    savePeoplesentry.innerText += bank;
}
function decrement(){
    count-=1;
    peoplesOut.innerText=count;
    save();

}
function date(){

let d=new Date();
todayDate.innerText=(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear());  
    
} 
function currenttime(){
 let time=new Date();
    nowTime.innerText=time;

}
function employeeinorouttime(){
    let t=new Date();
       employeeInOrOutTimeHour.innerText=t.getHours();
       employeeInOrOutTimeMinutes.innerText=t.getMinutes();
}