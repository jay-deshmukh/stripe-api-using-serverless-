const chai = require("chai");
var transaction = require("../stripe/service");
const expect=chai.expect;
chai.use(require('chai-json-schema'));


var chargeSchema = {
    charge: {
        id: "ch_1C8PpcJVVtm1NLB5uqyhhMyf",
        object: "charge",
        amount: 2000,
        amount_refunded: 0,
        application: null,
        application_fee: null,
        balance_transaction: "txn_1C8PpcJVVtm1NLB5IG4d2zll",
        captured: true,
        created: 1521711336,
        currency: "usd",
        customer: null,
        description: null,
        destination: null,
        dispute: null,
        failure_code: null,
        failure_message: null,
        fraud_details: {},
        invoice: null,
        livemode: false,
        metadata: {},
        on_behalf_of: null,
        order: null,
        outcome: {
            network_status: "approved_by_network",
            reason: null,
            risk_level: "normal",
            seller_message: "Payment complete.",
            type: "authorized"
        },
        paid: true,
        receipt_email: null,
        receipt_number: null,
        refunded: false,
        refunds: {
            object: "list",
            data: [],
            has_more: false,
            total_count: 0,
            url: "/v1/charges/ch_1C8PpcJVVtm1NLB5uqyhhMyf/refunds"
        },
        review: null,
        shipping: null,
        source: {
            id: "card_1C8PpcJVVtm1NLB56uxScE95",
            object: "card",
            address_city: null,
            address_country: null,
            address_line1: null,
            address_line1_check: null,
            address_line2: null,
            address_state: null,
            address_zip: null,
            address_zip_check: null,
            brand: "MasterCard",
            country: "US",
            customer: null,
            cvc_check: null,
            dynamic_last4: null,
            exp_month: 8,
            exp_year: 2019,
            fingerprint: "ohOduYdvDfFQy6E7",
            funding: "credit",
            last4: "4444",
            metadata: {},
            name: null,
            tokenization_method: null
        },
        source_transfer: null,
        statement_descriptor: null,
        status: "succeeded",
        transfer_group: null
    }
}

describe("Create Charge",function(){
    describe("Creating A Credit Charge",function(){
        it("Makes a Credit payment",function(){
            transaction.createCharge(999,"usd","example charge","tok_mastercard")
                .then((charge)=>{
                    expect(charge).to.be.jsonSchema(chargeSchema);
                })
                .catch((err)=>{
                    console.log(err);
                })
        })
    })
})