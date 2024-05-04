function display(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
}

//using async function to display countri details

async function displayCountries(){

    try{
        
        //fetch the countries api for details
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json();

        //data in the api

        if(data)
        {
            //select the root div for append the details
            let root = document.getElementById("root")

            data.forEach((e) => {

                let div = document.createElement("div")
                div.innerHTML=`
                <div class="card flip-card">
            <div id="fci" class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${e.flags.png}" alt="${e.name.common}" class="card-img-top fp">
                <div class="card-body">
                    <h5 class="card-title ct">${e.name.common}</h5>
                    <p class="card-text cc">${e.capital?e.capital[0]:'No Capital'} </p>
                    <p class="card-text cl"><a href="${e.maps.googleMaps}">Location</a></p>
                    <button id="getweat" class="btn btn-primary" onclick="getWeather(${e.latlng[0]},${e.latlng[1]})">Check Weather</button>
                  </div>
              </div>
              <div class="flip-card-back">
                <h1 class="fbt">Weather</h1>
                <p id="wt">Weather</p>
                <p id="te">Temperature</p>
              </div>
            </div>`
            root.appendChild(div);
                
            });

        }
        else
        {

        }
        


    }
    catch(error)
    {
        console.error(error);
    }

}

displayCountries()

display()

async function getWeather(lat,lon){

    const API_KEY = "0ee99e37a1a597232d5edbdc04f41494"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    let res = await fetch(url);
    let data = await res.json()

    let weat = document.getElementById("wt")
    let temp = document.getElementById("te")

    //converting kelvin to celcius the temperature

    console.log(data)
    let tempi = Math.round(data.main.temp - 273.15)

    weat.innerText=`${data.weather[0].description}`;
    temp.innerText=tempi;




}
