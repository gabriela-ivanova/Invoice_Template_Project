<?php

/**
 * 
 * @return type
 */
function create_invoice() {
  
    $streamObject = Request::jsonStream();

    $createRequest  = array(
        'client_name'         => $streamObject->client_name         ,
        'matter'              => $streamObject->matter              ,
        'issuer'              => $streamObject->issuer              ,
        'currency'            => $streamObject->currency            ,
        'invoice_number'      => $streamObject->invoice_number      ,
        'issuing_date'        => $streamObject->issuing_date        ,
        'service_description' => $streamObject->service_description ,
        'amount'              => $streamObject->amount              ,
        'price'               => $streamObject->price               ,
        'total_whithout_vat'  => $streamObject->total_whithout_vat  , 
        'vat'                 => $streamObject->vat                 ,
        'total'               => $streamObject->total       
    );

    if (Create::doesExists($createRequest)) {

        return Response::error(array(
                    'message' => 'Invoice exists'
        ));
    }

    if (Create::invoice($createRequest)) {

        return Response::ok(array(
                    'message' => 'Invoice has been created successfully'
        ));
    }
    return Response::error(array(
                'message' => 'Something went wrong'
    ));
}
