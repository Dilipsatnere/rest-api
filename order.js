const express = require("express");
const router = express.Router();

//1. code to handle GET request for orders
router.get("/", (req, res) => {
  res.status(200).json({
    msg: "This is the GET request for orders",
  });
});

//2. code to handle POST request for orders
router.post("/", (req, res) => {
  res.status(200).json({
    msg: "This is the POST request for orders",
  });
});

//3. code to handle GET request for single orders
router.get("/:orderid", (req, res) => {
  res.status(200).json({
    msg: "This is the GET request for single order",
  });
});

//4. code to handle PUT request for orders
router.put("/:orderid", (req, res) => {
  const id = req.params.orderid;
  res.status(200).json({
    msg: "This is the PUT request for orders",
    id: id,
  });
});

//5. code to handle DELETE request for orders
router.delete("/:orderid", (req, res) => {
  const id = req.params.orderid;
  res.status(200).json({
    msg: "This is the DELETE request for orders",
    id: id,
  });
});

module.exports = router;
