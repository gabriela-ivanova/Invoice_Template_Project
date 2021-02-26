CREATE DATABASE invoice;

CREATE TABLE invoice.tb_create (
    invoice_id           INTEGER AUTO_INCREMENT PRIMARY KEY  ,
    client_name          VARCHAR(256) NOT NULL		     ,
    matter               VARCHAR(512) NOT NULL               ,     
    issuer               VARCHAR(256) NOT NULL               , 
    currency             VARCHAR(256) NOT NULL               , 
    invoice_number       VARCHAR(256) NOT NULL               , 
    issuing_date         VARCHAR(256) NOT NULL               ,
    service_description  VARCHAR(256) NOT NULL               , 
    amount               VARCHAR(256) NOT NULL               , 
    price                VARCHAR(256) NOT NULL               , 
    total_whithout_vat   VARCHAR(256) NOT NULL               , 
    vat                  VARCHAR(256) NOT NULL               , 
    total                VARCHAR(256) NOT NULL               
);