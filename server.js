// 1. Require express
const express = require('express')

// 2. Create instance of express
const app = express();

// 3. Create PORT
const PORT = process.env.PORT || 8080;

// 5. Include Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 6. Define Routes ========================

// 7. The below route is a good test route to test in POSTMAN
app.get("/api/config", (req, res)=>{
    res.json({
        success:true
    });
})

// READ
app.get("/api/computer", (req, res)=>{
    res.json({
        error: false,
        data: [],
        message: "Successfully retrieved all computers"
    })
})

// CREATE
app.post("/api/computer", (req, res)=>{
    console.log(req.body);
    // Save the New Computer to the Database
    // If Successful Return A Response
    // If UnSUCCESSFUL Return response
    res.json({
        error: false,
        data: req.body,
        message: "Successfully created new Computer"
    })
})

// UPDATE
app.put("/api/computer/:id", (req, res)=>{
    // In terms of SQL -->
    // RUN AN UPDATE QUERY WHERE ID = req.params.id (WE access the parameter of the route )
    // Run the Query with the NEW PUT BODY
    console.log(req.body);
    res.json ({
        error: false,
        data: null, 
        message: `Successfully updated computer with id ${req.params.id}`
    })
})

// DELETE
app.delete("/api/computer/:id", (req, res) => {
    // RUN A DELETE QUERY WHERE ID = REQ.PARAMS.ID

    console.log(req.body)
    res.json({
        error: false,
        data: null, 
        message: `Successfully deleteed computer with id ${req.params.id}`
    })
})

// 4. Listen on PORT to start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});