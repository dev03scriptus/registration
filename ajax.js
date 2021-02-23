console.log("ajax")

let fetchData = document.getElementById("fetchData");
fetchData.addEventListener("click", buttonClickHandlor)

function buttonClickHandlor(){

    console.log("hello")

    // instantiat an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json')

    // what to do on progress
    xhr.onprogress = function(){
        console.log("on progress")
    }

    //what to do when response is ready
    xhr.onload = function(){
        console.log(this.responseText);
    }

    //send the request
    params = `{"name":"test12345","salary":"123","age":"23"}`
    xhr.send(params);
}


let backupData = document.getElementById("backupData");
backupData.addEventListener("click", backupDataHandler)

function backupDataHandler(){

    const pop = new XMLHttpRequest();

    pop.open("GET","http://dummy.restapiexample.com/api/v1/employees",true);

    pop.onload = function(){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById("employee_list");
        str = "";
        for(key in obj){
            str += `<li>${obj[key][0].employee_name}</li>`
        }
        list.innerHTML = str;
    }
    
    pop.send();

}

const array = [1,2,3,4,5,6];
const double = []

const newArray = array.forEach(function(num){
    double.push(num * 2)
});
console.log(double);

const mapArray = array.map(function(num){
    return num * 2
})
console.log(mapArray)

const filterArray = array.filter(function(num){
    return num < 4;
})
console.log(filterArray);

const reduceArray = array.reduce(function(acc, num){
    return acc + num
}, 6)
console.log(reduceArray)



