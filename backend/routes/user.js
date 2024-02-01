const { Router } = require("express");
const { User } = require("../db");
const { userCreate } = require("../type");
const jwt = require("jsonwebtoken");
const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;

  const userPayload = userCreate.safeParse(
    username,
    firstname,
    lastname,
    password
  );

  if (!userPayload.success) {
    return res.status(401).json({
      success: false,
      msg: "Wrong inputs",
    });
  }
  await User.create({
    username: username,
    firstName: firstname,
    lastName: lastname,
    password: password,
  });
  return res.status(200).json({
    success: true,
    msg: "User created successfully",
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

router.post("/update-profile", async (req, res) => {
  const userDetails = await User.findById(req.user._id);
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

module.exports = router;
