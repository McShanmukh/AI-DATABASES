var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'https://elastic:changeme@localhost:9200/'
  ]
});

module.exports = client; 