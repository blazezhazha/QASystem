function iphone_clk(){
    var question = document.getElementById("input").value;
    var query = "p=" + encodeURIComponent(question) + "&jsoncallback=?";
    var xmlhttp;
    var htmlContent;

    //console.log(question);
    //console.log(query);

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
    }

    if(question != ""){
        document.getElementById("input").value = "";
        console.log(question);
        htmlContent = "<div class='chat my'><p class='text'>" + question + "</p></div>";
        $(".screen").append(htmlContent);

        //console.log(htmlContent);

        xmlhttp.open("GET", "http://219.228.57.75:18888/proxy?" + query, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var answer = xmlhttp.responseText.split("</br>");
                console.log(answer);
                //console.log(answer[1]);
                //console.log(answer[1][0]);
                var firstAnswer = "";
                var flag = 0;
                if(answer[1][0]=='\n'){
                    firstAnswer = answer[1].substring(5);
                }
                else{
                    firstAnswer = answer[1].substring(2);
                }
                //console.log(firstAnswer);
                //ans_pattern = new RegExp(/^答：/);
                if(/^答：/.test(answer[1])){
                    flag = 1;
                }
                console.log(flag);
                console.log(answer[1].match(/^答：/));
                htmlContent = "<div class='chat'><p class='text'>" + firstAnswer + "<p></div>";
                $(".screen").append(htmlContent);
                var screen = document.getElementById("6s");
                screen.scrollTop = screen.scrollHeight;
            }
        }
    }
    
}