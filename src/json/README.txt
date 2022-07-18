
More on how to get local JSON data into "redux store" - https://hackernoon.com/fetching-data-from-a-json-file-with-a-react-and-redux-app
    P.S. - you don't need to use "axios" for local files - https://stackoverflow.com/questions/47064268/how-to-get-data-from-local-json-file-using-actions-and-axios-get-redux


To generate my JSON data I used - https://www.coderstool.com/json-test-data-generator
"Reviews" preset :
    {
        "_id": "{{uuid}}",
        "username": "{{firstname}}_{{surname}}",
        "email": "{{email}}",
        "score": {{float 1 10 0}} ,
        "description": "{{words 20}}"
    }