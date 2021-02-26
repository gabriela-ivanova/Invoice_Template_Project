<?php

class Create {

    private static $table = 'tb_create';
    
    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function invoice($parameterCollection) {

        Database::insert(self::$table, $parameterCollection);
        return Database::getLastInsertedId();
    }
    
    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function doesExists($parameterCollection) {

        $collection = Database::select(self::$table)
                              ::where('invoice_number', $parameterCollection['invoice_number'])
                              ::build();

        return (count($collection) > 0);
    }
}
