const service   =   require('./service');

export async function creditSale (data_,ctx,cb){    
    let data = JSON.parse(data_.body);    
    let amount =  data.amount;
    let currency =  data.currency;
    let descripyion =  data.descripyion;
    let source =  "tok_mastercard";
    let charge = await service.createCharge(amount,currency,descripyion,source)
    cb(null, { 
        body: {
            charge:charge
        }
        // body: JSON.stringify({
        //     charge:charge
        // })
    })
}

// export function creditSale (data_,ctx,cb){    
//     let data = JSON.parse(data_.body);    
//     let amount =  data.amount;
//     let currency =  data.currency;
//     let descripyion =  data.descripyion;
//     let source =  "tok_mastercard";
//     // new Promise ((resolve,reject) => {
//     service.createCharge(amount,currency,descripyion,source)
//     .then((charge) => {
//         cb(null, { 
//             body: JSON.stringify({
//                 charge:charge
//             })
//         })
//     })
//     .catch((err) => {
//         cb(null ,{
//             body:JSON.stringify({
//                 status:err
//             })
//         })
//     })             
// }