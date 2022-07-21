//[IK] adding randomly chosen product IDs to the reviews, so product pages could have an aggregate review thing


        const FileSystem = require("fs");
        const review_data = require("./reviews.json");
        const product_data = require("./products.json");

        //doing a thing

        let local_reviews = review_data;
        const product_count = product_data.ctRoot.length;

        review_data.ctRoot.forEach((elem, index) => {
            let random_prod = Math.floor(Math.random() * product_count);
            let productObject = product_data.ctRoot[random_prod];
            
            if( productObject ){
                Object.assign(local_reviews.ctRoot[index],{_prod_id: productObject._prod_id})
            }


        });


        //[IK] stolen from https://stackoverflow.com/questions/45148833/write-json-object-to-json-file-in-javascript
/*
        FileSystem.writeFile('new_reviews.json', JSON.stringify(local_reviews), (error) => {
           if (error) throw error;
        });*/
//[!] end of that thing