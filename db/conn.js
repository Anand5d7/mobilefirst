const mongoose = require("mongoose");


const DB = "mongodb+srv://roxiler-com:roxiler2000@cluster0.2a93pt0.mongodb.net/Authusers?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database Connected")).catch((errr) => {
    console.log(errr);
})