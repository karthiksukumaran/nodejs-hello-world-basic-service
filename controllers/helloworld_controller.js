'use strict';

module.exports = {
    helloworld : helloworld
}


function helloworld(request, response) {
    response.status(200).send({ data : "Hello World"});
}