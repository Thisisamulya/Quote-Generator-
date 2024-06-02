let text=document.querySelector("#text");
let author=document.querySelector("#author");
let api="https://type.fit/api/quotes";
function generation(){
    fetch(api)
    .then(function(response){
        let res=response.json();
        return res
    })
    .then(function(res){
        let vall=Math.floor(Math.random()*10);
        text.innerHTML=res[vall].text;
        author.innerHTML=`<i class="fa-solid fa-minus" id="bar" style="color: #2474ff;font-size: 40px;"></i> ${res[vall].author.replace(', type.fit', '')}`;
        console.log(res);
    })
}
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+text.innerHTML,"width=600","height=300");
}