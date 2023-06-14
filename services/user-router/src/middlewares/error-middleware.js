const errorMiddleware = (error, request, response, next) => {
	console.error(error.stack);
	console.error('Non-existing Uri: ', request.uri);
	response.status(500)
		.json({error: 'Path not existing'})
		.send('Path not existing')
		.end();
};

module.exports = errorMiddleware;