<?php

class Request {

    /**
     * 
     * @return type
     */
    public static function jsonStream() {

        $jsonObject = file_get_contents("php://input"); 
        return json_decode($jsonObject);
    }
}
