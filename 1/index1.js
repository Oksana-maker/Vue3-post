    function f1(){
        // создание объекта XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //запрос на сервер с
    xhr.open('GET', URL+'?id=691904&units=metric&APPID=f7922902abd3107e3ef9cb6a812c4d36');

    // xhr.setRequestHeader('apikey', 'APIKEY');
   //обработка полученного результата
    xhr.onload = function(){
       console.log(xhr.status);
       console.log(xhr.response);
       const obj = JSON.parse(xhr.response);
       console.log(obj);
      
    }
     //посылаем запрос
     xhr.send();
}
//f1()
function f2(){
    var data = JSON.stringify({
        "username": "monitor4medicine",
        "password": "lassTunSmehRgiNbraueN"
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://afyatest.smass.ch/api/v2.2/systemInfo");
      xhr.setRequestHeader("Content-Type", "application/json");
      // WARNING: Cookies will be stripped away by the browser before sending the request.
      //xhr.setRequestHeader("Cookie", "JSESSIONID=101ACB4A456482F2FD5EE9DEF256F62A");
      
      xhr.send(data);
    }
f2()