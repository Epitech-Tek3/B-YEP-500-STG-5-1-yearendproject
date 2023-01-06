import { Router, Request, Response } from "express";
import { now } from "mongoose";
import { User } from "../../models/user";

const router = Router();

router.post("/area/createArea", async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const user = await User.findById(req.cookies.__session);

    if (user) {
      await User.updateOne(
        { _id: user._id },
        {
          areaList: [...user.areaList, { ...data, created: now() }]
        }
      );
      const newUser = await User.findById(req.cookies.__session);
      res.status(200).send({ user: newUser });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end(e);
  }
});

router.post("/area/getArea", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.__session);

    if (user) {
      res.status(200).send({ area: user.areaList });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end(e);
  }
});

router.post("/area/deleteArea", async (req: Request, res: Response) => {
  const { occurence } = req.body;

  try {
    const user = await User.findById(req.cookies.__session);

    await User.updateOne(
      { _id: user._id },
      { areaList: [...user.areaList.filter((_: any, i: number) => i != occurence)] }
    );
    const newUser = await User.findById(req.cookies.__session);
    res.status(200).send({ user: newUser });
  } catch (e) {
    res.end(e);
  }
});

module.exports = router;
