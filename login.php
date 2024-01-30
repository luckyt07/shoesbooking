<html>  
<head>  
    <title>PHP login system</title>  
    <link rel = "stylesheet" type = "text/css" href = "style.css">   
</head>  
<body>  
    <div id = "frm">  
       <center> <h1>Login</h1>  </center>
        <form name="f1" action = "authentication.php" method = "POST">  
            <center>
            <p>  
                <label> UserName: </label>  <br>
                <input type = "text" id ="user" name  = "Email" />  <br>
            </p>  
            <p>  
                <label> Password: </label>  <br>
                <input type = "password" id ="pass" name  = "password" /> <br> 
            </p>  
            <p>     
                <input type =  "submit" id = "btn" value = "Login" />  
            </p>  
            <p>
                <a href="signup.html">sign up</a>
            </p>    
            </center>
        </form>  
    </div>
</body>
</html>