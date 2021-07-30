const express = require("express");
const faker = require('faker');
const app = express();



class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstname=faker.name.firstName();
        this.lastname=faker.name.lastName();
        this.phonenumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}
class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = new Address();
    }
}
class Address{
    constructor(){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.zipcode = faker.address.zipCode();
        this.state = faker.address.state();
        this.country = faker.address.country();
    }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("hi");
});

app.get("/api/users/new", (req, res) => {
    res.send(new User());
  });
  app.get("/api/companies/new", (req, res) => {
    res.send(new Company());
  });
  app.get("/api/user/company", (req, res) => {
    let u = new User();
    let c = new Company();
    res.send([u , c]);
  });

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
