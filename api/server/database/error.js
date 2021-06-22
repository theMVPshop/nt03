const handleSQLError = (response, error) => {
  console.log('SQL Error: ', err);
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  return response.status(500).send({
    status,
    message,
  });
};

module.exports = { handleSQLError };
