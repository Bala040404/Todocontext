function asyncHandler(fn) {
  return (req, res, next) => {
    fn(req, res).catch((e) => {
      next(e);
    });
  };
}
export default asyncHandler;
