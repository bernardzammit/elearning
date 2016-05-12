function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dvQWv3AwgR":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
alert("Results: " + player.GetVar("myVariable"));
}

