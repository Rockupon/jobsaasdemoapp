const CustomError = require('../errors');
// const { isTokenValid } = require('../utils');
const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

  try {
    // const { name, userId, role } = isTokenValid({ token });
    const { name, userId, role } = jwt.verify(token, process.env.JWT_SECRECT);
    // console.log(payload);
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid :' + error);
  }
};

const authorizePermissions =(...roles)=>{
return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      throw new CustomError.UnauthenticatedError('unauthorized to access this route');
    }
    next()
}
}

module.exports = {
    authenticateUser,
    authorizePermissions,
    
    };