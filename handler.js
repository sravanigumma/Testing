const AWS = require('aws-lambda');

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Test lambda function executed successfully!',
        input: event,
      },
      null,
      2
     ),
    };
};
