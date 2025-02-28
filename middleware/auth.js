const User = require("../models/agentModel");
const jwt = require("jsonwebtoken");

const Access = {
  user: ["get_all_lead", "get_lead", "update_lead"],
  TeamLeader: [
    "add_agent",
    "get_all_agent",
    "EditAgentDetails",
    "add_lead",
    "get_all_lead",
    "UpdateLeadByLeadId",
    "deleteLeadAttechmentHistory",
    "agent_delete",
  ],
};

const auth = async (req, res, next) => {
  try {
    const token = req.header("authorization")?.split(" ")[1];
    console.log("token", token, req.header("authorization"));
    if (!token)
      return res.status(403).json({ msg: "please provide valid auth token " });

    try {
      console.log("---------verfing token -------------");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("clams", decoded);
      const user = await User.findOne({ _id: decoded.id });
      console.log("user", user);
      req.user = user;
      if (user.role == "user") {
        const userAccessArr = Access.user.filter((v) => req.path.includes(v));
        if (userAccessArr.length < 1) {
          return res.status(401).json({ msg: "your are unauthorized" });
        } else {
          next();
          return;
        }
      }
      if (user.role == "TeamLeader") {
        const userAccessArr = Access.TeamLeader.filter((v) =>
          req.path.includes(v)
        );
        if (userAccessArr.length < 1) {
          return res.status(401).json({ msg: "your are unauthorized" });
        } else {
          next();
          return;
        }
      }
      if (user.role == "admin") next();
    } catch (err) {
      console.log("err", err);
      return res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (error) {
    console.log("token error", error);
    return res.status(500).json({ msg: "please provide valid auth token " });
  }
};

module.exports = { auth };
