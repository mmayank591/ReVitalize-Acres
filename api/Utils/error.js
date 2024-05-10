//SOMETIMES THE SYSTEM DOES NOT GENERATE ANY ERRORS SO WE HAVE TO MANUALLY PROVIDE ERRORS LIKE PASSWORD TOO LONG SO WE HAVE MADE THIS FOLDER AND COMPONENT
export const errorHandler=(statusCode,message)=>{
  const error=new Error();//javascript code to create new error
  error.statusCode=statusCode;
  error.message=message;
  return error;
};