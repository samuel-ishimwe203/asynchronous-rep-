
const queryWeather= async (city)=>{
    try{
        showLoading();

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metrics`)
      if(!res.ok) throw new Error("City not found ");

      const data = await res.json();
      displayWeather(data); 

    }catch(error){

    }
}