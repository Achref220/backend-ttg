
module.exports = {
  async initController(req, res) {
    try {
      return res
        .status(200)
        .json({ status: true, message: "Initialized server" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ status: false, message: err });
    }
  },
};
