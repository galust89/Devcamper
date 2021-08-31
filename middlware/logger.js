const logger = (req, res, next) => {
  req.hello = "Hello world";
  console.log("Middleware running");
  next();
};
