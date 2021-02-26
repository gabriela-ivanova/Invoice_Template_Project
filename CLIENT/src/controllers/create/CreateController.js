
(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('create/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };
 
    var _calculatePriceWithoutVat = () => {

        var priceWithoutVat = {}
        priceWithoutVat = ($("#amount").val() * $("#price").val());
        var priceWithoutVatValue = $("#total_without_vat").val(priceWithoutVat);
        return priceWithoutVatValue;
    };

    var _calculateTotalPrice = () => {

        var totalPriceCalculation = {};
        var vat = parseFloat($("#total_without_vat").val() * 0.2);
        var totalPriceCalculation = parseFloat($("#total_without_vat").val()) + parseFloat(vat);
        var totalPriceValue = parseFloat($("#total").val(totalPriceCalculation));

        return totalPriceValue;
    };

    var _constructor = () => {

        $dom.clientName                = document.getElementById("client_name")               ;
        $dom.legalCase                 = document.getElementById("legal_case")                ;
        $dom.issuerName                = document.getElementById("issuer_name")               ;
        $dom.currency                  = document.getElementById("currency")                  ;
        $dom.invoiceNumber             = document.getElementById("invoice_number")            ;
        $dom.issuingDate               = document.getElementById("issuing_date")              ;
        
        $dom.serviceDescription        = document.getElementById("service_descr")             ;
        $dom.amount                    = document.getElementById("amount")                    ;
        $dom.price                     = document.getElementById("price")                     ;
        $dom.totalWithoutVat           = document.getElementById("total_without_vat")         ;
        
        
        $dom.vat                       = document.getElementById("vat")                       ;
        $dom.total                     = document.getElementById("total")                     ;
        $dom.createInvoiceButton       = document.getElementById("create_invoice_btn")        ;
        $dom.clearButton               = document.getElementById("clear_btn")                 ;
        $dom.backButton                = document.getElementById("back_btn")                  ;
        
        $("#price").on("change keyup", _calculatePriceWithoutVat);
        $("#price").on("change keyup", _calculateTotalPrice);
        
        $dom.createInvoiceButton.addEventListener('click', function () {

            if ($dom.clientName.value.length == "Choose Name") {  
                $dom.clientName.after("This field is required")
                return;
            }

            if ($dom.legalCase.value.length == 0) {  
                $dom.legalCase.after("This field is required")  
                return;
            }

            if ($dom.issuerName.value.length == "Choose Name") {  
                $dom.issuerName.after("This field is required")  
                return;
            }
            
            if ($dom.currency.value.length == "Choose Currency") {  
                $dom.currency.after("This field is required")  
                return;
            }
            if ($dom.invoiceNumber.value.length == 0) {  
                $dom.invoiceNumber.after("This field is required")  
                return;
            }
            if ($dom.issuingDate.value.length == "mm/dd/yyyy") {  
                $dom.issuingDate.after("This field is required")  
                return;
            }
            if ($dom.vat.value.length == 0) {  
                $dom.vat.after("This field is required")  
                return;
            }
            if ($dom.total.value.length == 0) {  
                $dom.total.after("This field is required")  
                return;
            }
            
            var request = {

                client_name             : $dom.clientName.value                      ,
                matter                  : $dom.legalCase.value                       ,
                issuer                  : $dom.issuerName.value                      ,
                currency                : $dom.currency.value                        ,
                invoice_number          : $dom.invoiceNumber.value                   , 
                issuing_date            : $dom.issuingDate.value                     ,
                service_description     : $dom.serviceDescription.value              ,
                amount                  : $dom.amount.value                          ,
                price                   : $dom.price.value                           ,
                total_whithout_vat      : $dom.totalWithoutVat.value                 ,
                vat                     : $dom.vat.value                             ,
                total                   : $dom.total.value
            };

            Api.http.create.invoice(request, (result) => {
                var message = result[Object.keys(result)[1]];
                document.getElementById('create_message').innerHTML = message;
            });
           
            $("#form_placeholder").hide() ;
            $("#clear_btn").hide()        ;
            $("#back_btn").show()         ;
           
        });
        
        $dom.clearButton.addEventListener('click', function() {
            CreateController.init(contentPlaceholder);
        });
        
        $dom.backButton.addEventListener('click', function() {
            eval(CreateController.init(contentPlaceholder));
        }); 
    };
 
    CreateController = {
        init: _templateBootstrap
    };

})();

 