## Stripe Api Integration with Serverless

- Creating Payments With STRIPE using serverless and Lambda Functions and test with Mocha and Chai


### SETUP INSTRUCTIONS
- `npm install`
- in `stripe\config` make a new file `default.yml` and set it up with your credentials use `default.sample` for reference
- `serverless offline`
- `open POSTMAN and make a POST request on `http://localhost:3333/credit` with the sample JSON i.e 
```
{
	"amount": 2050,
	"currency":"usd",
	"description":"test-payment"
}
```
- test it with postman with following test case
```
var schema ={
        "id": "ch_1C8PpcJVVtm1NLB5uqyhhMyf",
        "object": "charge",
        "amount": 2050
};
var data1 = JSON.parse(responseBody);
tests["Valid Data "] = tv4.validate(data1, schema);

```

- you can also do `mocha and chai ` based testing in a console with `npm test`