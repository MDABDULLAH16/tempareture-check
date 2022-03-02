const API_KEY = `d6a038f96ccd28b75137a56d98ef0be6`
const searchTempareture = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data))

}
const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;
}

const displayTempareture = tampareture => {
    setInnerText("city", tampareture.name);
    setInnerText("tempareture", tampareture.main.temp)
    setInnerText('condition', tampareture.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${tampareture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute("src", url);
}