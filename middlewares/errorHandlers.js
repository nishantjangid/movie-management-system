// Error handling middleware function
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack);

    // Default status code and error message
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? 'Sorry, something went wrong!' : err.stack,
    });
};

module.exports = errorHandler;
