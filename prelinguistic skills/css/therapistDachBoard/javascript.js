let childName= document.getElementById("childName")
let childBirth=document.getElementById('childBirth')
let childAssessmentDate=document.getElementById('childAssessmentDate')
let childDiag=document.getElementById("childDiag")
let mentalAge=document.getElementById("mentalAge")
let total=document.getElementById("childNotes")
let therapistNotes=document.getElementById('therapistNotes')
let childAssessment=document.getElementById("childAssessment")
let treatmetnPlan=document.getElementById("treatmetnPlan")
//console.log(title,price,taxes,ads,discount,total,count,category,submit)
//create new report
let dataPro
if(localStorage.product!=null){
    dataPro=JSON.parse(localStorage.product)
}
else{
    dataPro=[]
}

submit.onclick=function(){
    let newPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value

    }
if(newPro.count>1){
    for(let i=0;i<newPro.count;i++){
        dataPro.push(newPro)
    }
} 
else{
    dataPro.push(newPro)
}
    //dataPro.push(newPro)
    console.log(newPro)
    localStorage.setItem("product",JSON.stringify(dataPro))
clearData()
showData()
//deleteData()
}
//save data in local storage
//clear data from local storage 
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    total.innerHTML='';
    count.value='';
    discount.value=''
    category.value=''

}

//read data
function showData(){
let table='';
for (let i=0;i<dataPro.length;i++){
    table+=`<tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].category}</td>
    <td>${dataPro[i].total}</td>
    <td><button onclick="updateData(${i})"id="update">update</td></button>
    <td><button onclick="deleteData(${i})" id="delete">delete</td></button>
</tr>
`
}
document.getElementById('tbody').innerHTML=table;
let btnDelete=document.getElementById("deleteAll")
if (dataPro.length>0){
btnDelete.innerHTML=`<button onclick="deleteAll()">Delete All (${dataPro.length})</button>`
}
else{
    btnDelete.innerHTML=''
}
}
showData()
//delete specific item
function deleteData(i){
 dataPro.splice(i,1);
 localStorage.product=JSON.stringify(dataPro);
 showData()
}
//Delete ALL
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
}
//count data 
//update
function updateData(i){
   title.value=dataPro[i].title
   price.value=dataPro[i].price
   taxes.value=dataPro[i].taxes
   ads.value=dataPro[i].ads
   discount.value=dataPro[i].discount
   category.value=dataPro[i].category
   title.style.background="white"
getTotal()
count.style.display="none"
    }
//search
//clean data