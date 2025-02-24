const createError = require("http-errors");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const mainRouter = require("./routes/main");

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

module.exports = app;