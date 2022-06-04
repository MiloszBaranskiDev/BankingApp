const GetMessageId = () => {
  const id: number = Math.floor(1000 + Math.random() * 9000);

  return id;
};

export default GetMessageId;
