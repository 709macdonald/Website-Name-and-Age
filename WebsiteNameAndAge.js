<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript">

    function nameAndage(){
      var welcomename = document.getElementById('name');
      var birthyear = document.getElementById('birthyear');
      var age = (2018-birthyear)

      welcomeMsg.innerHTML = "Hello " + welcomename.value + " you are " + age.value " years old. <br/>";
    }

    </script>

</head>

<body>

<p id="welcome"></p>
<form>
  What is your name:<input type="text" id="name"/><br/>
  What year were you born:<input type="text" id="birthyear"/><br/>

  <input type = "button" value="Enter" onclick="nameAndage();'/>'"
</form>

</body>
</html>
