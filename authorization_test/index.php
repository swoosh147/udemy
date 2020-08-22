<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registration form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container mt-4">

    <?php
    if($_COOKIE['user'] == ''):
    ?>

        <div class="row">
            <div class="col">
                    <h1>Registration</h1>
                    <form action="validation/check.php" method="post">
                        <input type="text" class="form-control" name="login" id="login" placeholder="input login"> <br>
                        <input type="text" class="form-control" name="name" id="name" placeholder="input name"> <br>
                        <input type="pasword" class="form-control" name="pass" id="pass" placeholder="input password"> <br>
                        <button class="btn btn-success" type="submit">Sign up</button>
                    </form>
            </div>
            <div class="col">
                    <h1>Login</h1>
                    <form action="validation/auth.php" method="post">
                        <input type="text" class="form-control" name="login" id="login" placeholder="input login"> <br>
                        <input type="pasword" class="form-control" name="pass" id="pass" placeholder="input password"> <br>
                        <button class="btn btn-success" type="submit">Sign in</button>
                    </form>
            </div>

    <?php else:?>
    <p>Hello <?=$_COOKIE['user']?>. if you want exit click <a href="exit.php">here</a>.</p>

    <?php endif; ?>
        </div>
    </div>
</body>
</html>