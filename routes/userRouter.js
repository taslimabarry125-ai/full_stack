import express from "express";

const router = express.Router();

const localTraitement = (req, res, next) => {
  console.log("Local traitement");
  next();
};

router.post("/", localTraitement, (req, res) => {
  const { name, firstName } = req.body;
  res.status(200).json({ status: "OK", user: `${name} ${firstName}` });
});

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.status(200).json({ message: `User ${id} updated`, name });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `User ${id} deleted` });
  });

export default router;