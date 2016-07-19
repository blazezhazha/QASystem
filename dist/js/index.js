function clk(){
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

    htmlContent = "<div class='msg-container user_a'><div class='msg'>" + question + "</div></div>";
    $(".dlg").append(htmlContent);

    //console.log(htmlContent);

    xmlhttp.open("GET", "http://219.228.57.75:18888/proxy?" + query, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var answer = xmlhttp.responseText.split("</br>");
            console.log(answer[1]);
            var firstAnswer = answer[1].substring(2);
            htmlContent = "<div class='msg-container user_b'><div class='msg'>" + firstAnswer + "</div></div>";
            $(".dlg").append(htmlContent);
        }
    }
}