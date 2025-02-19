const errorHandler = (error, context, returnValue = null) => {
    console.error(context, error);
    return returnValue;
};

export default errorHandler;