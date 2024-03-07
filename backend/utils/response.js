class Response {
  constructor(message, data) {
    this.data = data;
    this.message = message;
    this.success = true;
    this.status = 200;
  }
}

export default Response;
