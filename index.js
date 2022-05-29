 let id;

 async function getData(){
    let query=document.getElementById("query").value;
    let url =`https://swapi.dev/api/people/?search=${query}`
    let res =await fetch(url)
    let data =await res.json();
    return data.results;
    //console.log(data);
}
//getData()
function appendd(data){
    //contener.innerHTML=null
    let contener=document.getElementById("show")
    contener.innerHTML=null;
    data.forEach(function(el){
        let name=document.createElement("p")
        let ancer=document.createElement("a")
        ancer.href="show.html";
        name.innerText=el.name;
        contener.append(name)

    })
}
async function main(){
  let data =await getData();
  appendd(data);
}
function debounc(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
       func();
    },delay)

}