let container=document.querySelectorAll("input[type=checkbox]")
let feedingContainer=document.getElementsByClassName("feeding").length
let counter=0
let feedingCounter=0
let socialCounter=0
let languageCounter=0
let cognitiveCounter=0
let movementCounter=0
let name='ALI'
let feedingDegree=document.getElementsByClassName('feeding')[0]
let totalFeeding=feedingDegree.getElementsByTagName("input").length
//////////////////////////////////////////////////////////////////////
let socialDegree=document.getElementsByClassName('social')[0]
let totalSocial=socialDegree.getElementsByTagName("input").length
////////////////////////////
let languageDegree=document.getElementsByClassName('language')[0]
let totallanguage=languageDegree.getElementsByTagName("input").length
///////////////////////////////////////
let cognitiveDegree=document.getElementsByClassName('cognitive')[0]
let totalCognitive=cognitiveDegree.getElementsByTagName("input").length
///////////////////////////////////////////////////
let movementDegree=document.getElementsByClassName('movement')[0]
let totalMovement=movementDegree.getElementsByTagName("input").length
console.log(totalMovement)
//////////////////////////
console.log(totalFeeding)
for (let i=0;i<container.length;i++){
     if(container[i].addEventListener("click",function(event){
          if(container[i].checked==true){
               counter++

          }
          else{
               counter--

          }
//feeding counter
     if(container[i]=== document.getElementById(`myCheck${i}`)){
          if(container[i].checked==true){
               feedingCounter++}
          else{
               feedingCounter--
          }
         document.getElementsByClassName("feedingDegree")[0].
         innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي في التغذية بنسية ${((feedingCounter/totalFeeding)*100).toFixed(2)} %`


     }
//social counter
     else if(container[i].id.startsWith("social")){
          if(container[i].checked==true){
               socialCounter++}
          else{
               socialCounter--
          }

         // let socialLength= socialList.push(container[i]).length
          document.getElementsByClassName('socialDegree')[0].
          innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي إجتماعيا ${((socialCounter/totalSocial)*100).toFixed(2)} %`
      }
//////
//language counter
else if(container[i].id.startsWith("language")){
     if(container[i].checked==true){
          languageCounter++}
     else{
          languageCounter--
     }
     document.getElementsByClassName('languageDegree')[0].
     innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي لغويا ${((languageCounter/totallanguage)*100).toFixed(2)} %`
}
//cognitive
else if(container[i].id.startsWith("cognition")){
     if(container[i].checked==true){
          cognitiveCounter++}
     else{
          cognitiveCounter--
     }
     document.getElementsByClassName('cognitiveDegree')[0].
     innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي إدراكيا ${((cognitiveCounter/totalCognitive)*100).toFixed(2)}%`
}
// movement 
else if(container[i].id.startsWith("movement")){
     if(container[i].checked==true){
          movementCounter++}
     else{
          movementCounter--
     }
     document.getElementsByClassName('movementDegree')[0].
     innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي حركيا ${((movementCounter/totalMovement) *100).toFixed(2)}%`
}
//total degree

     document.getElementsByClassName("totalDegree")[0].
     innerHTML=`يتناسب عمر طفلك مع التطور الطبيعي بنسبة  ${(counter/container.length*100).toFixed(2)} %`


     })){     window.localStorage.setItem('number',movementCounter)

     }}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
