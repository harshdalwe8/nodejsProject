var util = require('util');


const bodyHash = {
    encode: (toEncodeString) => {
        // encode string to array
        let encoder = new util.TextEncoder();
        let uint8Array = encoder.encode(toEncodeString);
        return uint8Array;
    },
    decode: (req,res,next) => {
        req.body = {
            "userName": "harsh dalwe",
            "userEmail": "harshtest@gmail.com"
        };
        // let decoder = new util.TextDecoder();
        // const u8arr = new Uint8Array(req.body);
        // let stringResult = decoder.decode(u8arr);
        // req.body = stringResult; //JSON.parse(stringResult);
        next();
    }
}

// var enc = bodyHash.encode('"{\"userName\":\"harshdalwe\",\"userEmail\":\"harshtest@gmail.com\"}"');
// console.log(enc);

// var dec = bodyHash.decode(enc);
// console.log(dec);

module.exports = bodyHash;

