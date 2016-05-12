function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iIwf4oRINK":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
alert("Results are: " + player.GetVar("myVariable"));
}

