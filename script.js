const param ={
    url: "https://api.openweathermap.org/data/2.5/",
    cityid: "691904",
    appid: "f7922902abfergtrd3107e3ef9cb6a812c4d36"

}
   async function getWeather() {
    let a = await fetch(param.url + "weather?id=" + param.cityid + "&units=metric&appid=" + param.appid)
    // .then(weather => { 
    //     return weather.json();
    // })
    // .then(data => {
    //     console.log(data)
    // });
    console.log(a)
    const result = await a.json();
    console.log(result);
}
// getWeather()

async function f1(){
    const requestHeader = new Headers();
    var data = JSON.stringify({
        "username": "moefnit3rfgt4gorfe4medicine",
        "password": "lawfresrfretrt4sTunSmehRgiNbraueN"
      });
    requestHeader.append('apikey', '03508a32621d549c');
    const res = await fetch('https://genesis.smass.ch/appFiles/pdfTemplates/css/css.vm',{
        method: 'GET',
        headers: requestHeader
    } );
    if (!res.ok){
const message = 'Error' + response.status
throw new Error(message)
    }
    console.log(a);
}
// f1(data)


// var data = JSON.stringify({
//   "username": "monitor4medicine",
//   "password": "lassTunSmehRgiNbraueN"
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://genesis.smass.ch/api/v2.2/systemInfo");
// xhr.setRequestHeader("Content-Type", "application/json");
// // WARNING: Cookies will be stripped away by the browser before sending the request.
// xhr.setRequestHeader("Cookie", "JSESSIONID=E70B073B94EF0CFA7A3C9283055A3BFB");

// xhr.send(data);