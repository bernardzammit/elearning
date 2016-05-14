var playerScore;
function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5u7UZp5pg04":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
  playerScore = player.GetVar("myVariable");
  document.getElementById("demo").innerHTML = "allllllaaa";
  alert("Results: " + player.GetVar("myVariable"));
}

