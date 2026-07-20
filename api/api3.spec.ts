import {test, expect} from '@playwright/test'

test('Post rquest example 1', async({request }) =>{
    const response = await request.post('https//api.restful-api.dev/objects',
         {
        headers: {"Content-Type": "application/json"}, 
        data: {"name": "Apple MacBook Pro 16", "data":{
            "year": 2019,
            "price": 111,
            "CPU model" : "Intel",
            "Hard disk" : "1 TB"
        }}
    }




    )
     var responseData = await response.json()
     console.log(responseData)
   
})