function get(username,password, mail){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://c1536939.ngrok.io/Portal_war_exploded/addUser/{\"username\":\""+ username.value + "\",\"password\":\"" +  password.value + "\",\"mail\":\"" +mail.value + "\",\"examenes\":[]}", false);
    xhr.send();
    console.log("get");
}