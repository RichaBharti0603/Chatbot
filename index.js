const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    const queryResult = req.body.queryResult;

    let responseText = "I'm not sure how to help with that.";

    if (queryResult.intent.displayName === 'Connect to Therapist') {
        responseText = "Sure! Let me connect you with a therapist.";
    }

    res.json({
        fulfillmentText: responseText,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

