function status(request, response) {
  response.status(200).json({"chave":"Status api de pé"});
}

export default status;