exports.getEntry = async (req, res, next) => {
    try {
      console.log("Get Router working");
      res.status(201).json({
        message: "Get Router Working"
      });
    } catch (error) {
      console.log("Get Router not working" + error);
      res.status(500).json({ error: "Get Router not working" });
    }
  };
