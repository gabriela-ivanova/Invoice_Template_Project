<?php

class Response {

    /**
     * 
     * @param type $jsonCollection
     * @param type $message
     */
    public static function error($responseInpuCollection = array()) {

        Response::send($responseInpuCollection, '400');
    }

    /**
     * 
     * @param type $jsonCollection
     * @param type $message
     */
    public static function forbidden($responseInpuCollection = array()) {

        Response::send($responseInpuCollection, '403');
    }

    /**
     * 
     * @param type $jsonCollection
     * @param type $message
     */
    public static function notFound($responseInpuCollection = array()) {

        Response::send($responseInpuCollection, '404');
    }

    /**
     * 
     * @param type $responseInpuCollection
     */
    public static function ok($responseInpuCollection = array()) {

        Response::send($responseInpuCollection, '200');
    }

    /**
     * 
     * @param type $responseInpuCollection
     * @param type $statusCode
     */
    private static function send($responseInpuCollection, $statusCode) {

        $responseObject = array(
            'status' => $statusCode
        );

        if (isset($responseInpuCollection['message'])) {
            $responseObject['message'] = $responseInpuCollection['message'];
        }

        if (isset($responseInpuCollection['data'])) {
            $responseObject['data']    = $responseInpuCollection['data'];
        }
        header('Content-Type:application/json');
        echo json_encode($responseObject);
    }
}
