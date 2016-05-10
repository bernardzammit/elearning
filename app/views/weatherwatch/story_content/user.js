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
  var playerScore = player.GetVar("myVariable");
alert("Results: " + player.GetVar("myVariable"));
}

