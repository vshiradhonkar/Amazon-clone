const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(// eslint-disable-next-line
  "sk_test_51NxS4wSAFfI6nMC5orPAvbi8DDYEEp3nW75tvscU02NDdRKAPrVJcmWatTa9in59MYzxcCUDIdRL9jUASsd5lKdz00ojdbF7nj"
);

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello clone"));
// eslint-disable-next-line
app.post("/payments/create", async (request, response) => {const total = request.query.total;

  console.log("Payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr"});


  response.status(201).send({clientSecret: paymentIntent.client_secret});
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-248c0/us-central1/api
