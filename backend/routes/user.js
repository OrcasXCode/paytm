const { Router } = require("express");
const { User, Account } = require("../db");
const { userCreate } = require("../type");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../middlewares/User");
const router = Router();

router.post("/signup", async (req, res) => {
  const userDetails = req.body;

  const userPayload = userCreate.safeParse(userDetails);

  if (!userPayload.success) {
    return res.status(401).json({
      success: false,
      msg: "Wrong inputs",
    });
  }
  const newUser = await User.create({
    username: userDetails.username,
    firstName: userDetails.firstname,
    lastName: userDetails.lastname,
    password: userDetails.password,
  });

  const userId = newUser._id;
  await Account.create({
    userId,
    balance: (1 + Math.random() * 10000).toFixed(2),
  });

  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  return res.status(200).json({
    success: true,
    msg: "User created successfully",
    newUser,
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      username,
      password,
    });

    if (!user) {
      return res.status(500).json({
        success: false,
        msg: "Invalid credentials",
      });
    } else {
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      return res.status(200).json({
        success: true,
        msg: "Signin sucsessfull",
        token,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Server error failed to login",
    });
  }
});

router.use("/update-profile", userMiddleware);
router.post("/update-profile", async (req, res) => {
  const userDetails = await User.findById(req.user.id);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  const updateProfile = await User.findByIdAndUpdate(
    {
      _id: userDetails._id.toString(),
    },
    {
      firstName: firstName,
      lastName: lastName,
      password: password,
    },
    {
      new: true,
    }
  );
  return res.status(200).json({
    success: true,
    msg: "Profile updated sucessfully",
  });
});

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";

    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });

    return res.status(200).json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Server Error",
    });
  }
});

module.exports = router;
