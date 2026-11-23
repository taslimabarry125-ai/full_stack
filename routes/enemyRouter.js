import express from "express";

const router = express.Router();
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { type } = req.query;
  console.log(`Requesting info about enemy ${id} of type ${type}`);
  res.send(`Enemy number ${id}, type: ${type}`);
});
export default router;