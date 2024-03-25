

import app from "./app";
import connectToDatabase from "./utils/connectToDB";

const port = 5000;

connectToDatabase()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
export { app }; // Export the app for calling and running it in app.js
