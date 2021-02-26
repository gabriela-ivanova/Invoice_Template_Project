var HttpApi = {}; 

var url = (endpoint, queryParameterCollection) => {

    var URL = `http://localhost/LegalTrek_Invoice/SERVER`;
    var urlEndpoint = `${URL}/${endpoint}`;

    if (queryParameterCollection) {

        var query = '';
        for (var index in queryParameterCollection) {
            query += `${index}=${queryParameterCollection[index]}&`;
        }
        query = query.substring(0, query.length - 1);
        return `${urlEndpoint}?${query}`;
    }
    return urlEndpoint;
}

HttpApi.create = {};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.create.invoice = (body, callback) => {

    Ajax.postJSON(url('create'), body, (ajaxObject, res) => {
        callback(res);
    });
};









































