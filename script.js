<script>
  var pb = new Pandorabot("aiaas.pandorabots.com", 1409612605655, trumpdatingadvice, a098f0f853a5f60d99d12dc2366bbfd2); // These should match the creds with which you created the bot
  function doTalk() {
    var input = document.getElementById("yousay").value;
    document.getElementById("yousay").value = "";
    pb.talk(input, function(data) {
      var response = data["responses"];
      document.getElementById("response").innerHTML = response;
      console.log(response);
    });
  }
</script>