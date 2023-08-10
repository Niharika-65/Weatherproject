const apiKey = "f63b77982b0578ffc21b28f755cacbe4";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const WeatherIcon =document.querySelector(".Weather-icon");
    const flex =document.querySelector(".flex");


    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".Weather").style.display = "none";
        }
        else{
            var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900?" + city + "')";

        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png"
        }

        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
        
    }
    
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
        