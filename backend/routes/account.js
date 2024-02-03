const express = require("express");
const { userMiddleware } = require("../middlewares/User");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", userMiddleware, async (req, res) => {
  try {
    const userAccount = await Account.findOne({
      userId: req.user.id,
    });
    return res.status(200).json({
      balance: userAccount.balance,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Server Error , Failed to get the balance",
    });
  }
});

router.post("/transfer", userMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const to = req.body.to;
  const amount = req.body.amount;
  if (!to || !amount) {
    return res.status(401).json({
      success: false,
      msg: "Please provide all fields!",
    });
  }
  const fromAccount = await Account.findOne({
    userId: req.user.id,
  }).session(session);

  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "Invalid Account",
    });
  }

  await Account.updateOne(
    {
      userId: req.user.id,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);

  await session.commitTransaction();
  return res.status(200).json({
    success: true,
    msg: "Transfer Successfull",
  });
});

module.exports = router;
