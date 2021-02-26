<?php

include './src/db/Database.php'     ;
include './src/util/Request.php'    ;
include './src/util/Response.php'   ;
include './config/routes.php'       ;
include './src/util/Router.php'     ;
include './src/models/Create.php'   ;

Router::bootstrap()                 ;

