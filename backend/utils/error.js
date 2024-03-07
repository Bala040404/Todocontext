class Apierror extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.success = false;
    this.status = status;
  }
}

export default Apierror;
