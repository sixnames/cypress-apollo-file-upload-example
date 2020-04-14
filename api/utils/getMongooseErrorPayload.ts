function getMongooseErrorPayload({ errors }: { errors: { [key: string]: any } }) {
  const messagesArray = Object.keys(errors).map((key) => {
    return errors[key].message;
  });

  return messagesArray.join(', ');
}

export default getMongooseErrorPayload;
