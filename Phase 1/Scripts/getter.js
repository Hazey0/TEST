const data=localStorage.getItem("phones");
const phones=JSON.parse(data);
console.log(phones);
if(phones.localStorage=0){
fetch('../Scripts/storage/phones.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("phones",JSON.stringify(json));
 
 
 })
}


const dataf=localStorage.getItem("featuredPhones");
const featuredPhones=JSON.parse(dataf);
console.log(featuredPhones);

if(featuredPhones.length=0){
 
 fetch('../Scripts/storage/featuredPhones.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("featuredPhones",JSON.stringify(json));
 
 
 })
}
 

 
 const datau=localStorage.getItem("users");
 const users=JSON.parse(datau);
 console.log(users);
if(users.length=0){
 fetch('../Scripts/storage/users.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("users",JSON.stringify(json));
 
 
 })

}
 