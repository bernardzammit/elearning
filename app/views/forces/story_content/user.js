function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6flbz8QRXFf":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
alert("Results are: " + player.GetVar("myVariable"));
}

