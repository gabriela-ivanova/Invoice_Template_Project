<?php

function getRequestEndpointMapping() {
        
    return array(
        array(
            'endpoint'  => 'create'         ,
            'execute'   => 'create_invoice' ,
            'method'    => 'POST'
        )
    );
}