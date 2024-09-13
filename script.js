let cityName=document.getElementById("city-name");
let cityTemp=document.getElementById("city-temp");
let form=document.getElementById('form');
let apiKey="c32ffa7ed91073f74307800f3b874058";


form.addEventListener("submit",(e)=>{
    

    e.preventDefault()  // form will update automaically it will not show 
   // console.log(e)
    console.log("city Name is",cityName.value)

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`  //here units and metrics is used to convert farenheit to celcius
    fetch(url)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        const div=document.createElement("div")
        div.classList.add("city")
        const {main,sys,name}=res
        let result= `
        <div>
            <h1>${name}</h1>
            <p>
                ${main.temp}<sup>0</sup>C
                ${sys.country}
            </p>
        </div>
    `
    div.innerHTML=result
    cityTemp.appendChild(div)
    })
})