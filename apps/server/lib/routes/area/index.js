"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const user_1 = require("../../models/user");
const router = (0, express_1.Router)();
router.post("/area/createArea", async (req, res) => {
    const data = req.body;
    try {
        const user = await user_1.User.findById(req.cookies.__session);
        if (user) {
            await user_1.User.updateOne({ _id: user._id }, {
                areaList: [...user.areaList, Object.assign(Object.assign({}, data), { created: (0, mongoose_1.now)() })]
            });
            const newUser = await user_1.User.findById(req.cookies.__session);
            res.status(200).send({ user: newUser });
        }
        else
            res.status(200).send({ error: "unauthenticated" });
    }
    catch (e) {
        res.end(e);
    }
});
router.post("/area/getArea", async (req, res) => {
    try {
        const user = await user_1.User.findById(req.cookies.__session);
        if (user) {
            res.status(200).send({ area: user.areaList });
        }
        else
            res.status(200).send({ error: "unauthenticated" });
    }
    catch (e) {
        res.end(e);
    }
});
router.post("/area/deleteArea", async (req, res) => {
    const { occurence } = req.body;
    try {
        const user = await user_1.User.findById(req.cookies.__session);
        await user_1.User.updateOne({ _id: user._id }, { areaList: [...user.areaList.filter((_, i) => i != occurence)] });
        const newUser = await user_1.User.findById(req.cookies.__session);
        res.status(200).send({ user: newUser });
    }
    catch (e) {
        res.end(e);
    }
});
module.exports = router;
//# sourceMappingURL=index.js.map