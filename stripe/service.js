var stripe = require("stripe")(process.env.STRIPE_KEY);
export const createCharge = (amount , currency , description , source) => {
    return new Promise((resolve, reject) => {
        stripe.charges.create({
            amount,
            currency,
            description,
            source
        },function(err,charge){
            if(err)
                reject(err);                   
            // console.log(charge);                   
             resolve(charge);            
        })
    });
}