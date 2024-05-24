let url= "https://catfact.ninja/fact";

async function get(){
    try{
        let res= await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
        // return res.data.fact;
    }
    catch{
        console.log("Not happening");
    }
}

let btn1= document.querySelector(".cat");
let ul= document.querySelector(".fact");

btn1.addEventListener("click", async ()=>{
    let a= await get();
    let li= document.createElement("li");
    li.innerText= a;
    ul.appendChild(li);
});


// .then((res)=>{
    // let li= document.createElement("li");
    // li.innerText= res.json()
    // .then(()=>{
    //     ul.appendChild(li);
    // });
// })
// .catch(()=>{
//     console.log("click access Failed");
// });


const url2= "https://icanhazdadjoke.com/";
let btn2= document.querySelector(".joke");

async function getJoke(){
    try{
        let config= { headers: {Accept : "application/json"}};
        let res= await axios.get(url2, config);
        return res.data.joke;
    }
    catch{
        console.log("joke not fetched");
    }
}


btn2.addEventListener("click", async ()=>{
    let a= await getJoke();
    let li= document.createElement("li");
    li.innerText= a;
    ul.appendChild(li);
});