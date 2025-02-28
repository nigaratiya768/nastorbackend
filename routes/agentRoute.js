const express = require("express");

const {
  createAgent,
  getAllAgent,
  getAgentDetails,
  deleteAgent,
  loginAgent,
  updateClientAccess,
  EditAgentDetails,
  getAllTeamLeader,
  getAllAgentByTeamLeader,
  getAllAgentofATeamByAgent,
  changePassword,
} = require("../controllers/agentController");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.route("/add_agent").post(createAgent);

router.route("/get_all_agent").get(auth, getAllAgent); ///  For get All Agent According to Admin
router.route("/getAllAgentByTeamLeader").post(auth, getAllAgentByTeamLeader); /// for get Agent According to TL
router
  .route("/getAllAgentofATeamByAgent")
  .post(auth, getAllAgentofATeamByAgent); ////// Get All Agent Of A Team
router.route("/getAllTeamLeader").get(auth, getAllTeamLeader);
router.route("/get_agent_details/:id").get(auth, getAgentDetails);

router.route("/agent_delete/:id").delete(auth, deleteAgent);

router.route("/update_agent_access/:id").put(auth, updateClientAccess);
router.route("/EditAgentDetails/:id").put(auth, EditAgentDetails);
router.route("/password/change").post(auth, changePassword);
module.exports = router;
