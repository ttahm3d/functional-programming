// Create two functions that logs any message with your name and logs any message with user ID. Combine these functions to log a message with both usename and id

const logWithName = (message) => `Tahir says ${message}`;

const logWithID = (message) => `174: ${message}`;

const logWithNameAndId = (message) => logWithID(logWithName(message));

console.log(logWithNameAndId("typescript will rule all"));
