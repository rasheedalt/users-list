const responseHelper = (req, res, next) => {
    res.errResponse = function (code = 500, msg = "An error occured", data = []) {
      res.status(code).json({ success: false, status: "error", message: msg, data });
    };
  
    res.successResponse = function (data = [], msg = "successful") {
      res.status(200).json({ success: true, status: "success", message: msg, data });
    };
  
    next();
};
  
export default responseHelper;
  