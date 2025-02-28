const express = require("express");

const {
  Add_Lead,
  getAllLead,
  getLeadById,
  deleteAllLead,
  getLeadbyagentidandwithoutstatus,
  getAllLeadFollowup,
  getLeadbyagentidandwithstatus,
  BulkLeadUpdate,
  getAdvanceFillter,
  LeadTransfer,
  BulkDeleteLead,
  UpdateLeadByLeadId,
  leadattechmenthistory,
  deleteLeadAttechmentHistory,
  getAllNewLead,
  getAllNewLeadBYAgentId,
  getAllUnassignLead,
  getLeadbyTeamLeaderidandwithstatus,
  getLeadbyTeamLeaderidandwithoutstatus,
  getLeadbyScheduleEventid,
  getBestAndWorstPerformanceService,
  Add_housing_Lead,
  getLeadbyGroupLeaderidandwithstatus,
  getLeadbyGroupLeaderidandwithoutstatus,
} = require("../controllers/leadController");

const { auth } = require("../middleware/auth");
const router = express.Router();
router.route("/add_lead").post(auth, Add_Lead);
// router.route("/add_housing_Lead").post(Add_housing_Lead);
router.route("/get_all_lead").get(auth, getAllLead); //getBestAndWorstPerformanceService
router
  .route("/get_service_best_and_worst")
  .get(auth, getBestAndWorstPerformanceService);
router.route("/getAllUnassignLead").get(auth, getAllUnassignLead);
router.route("/getAllNewLead").get(auth, getAllNewLead);

router.route("/getAllNewLeadBYAgentId").post(auth, getAllNewLeadBYAgentId); ////////Get All New Lead For Agent (By Agent Id)

router.route("/getAdvanceFillter").post(auth, getAdvanceFillter);

router.route("/get_lead_by_id/:id").get(auth, getLeadById);
router.route("/delete_all_lead").delete(auth, deleteAllLead);
router
  .route("/get_Leadby_agentid_status")
  .post(auth, getLeadbyagentidandwithoutstatus); //for followuppage
//  with loss and won status
router
  .route("/get_Leadby_agentid_with_status")
  .post(auth, getLeadbyagentidandwithstatus); // for all lead Page
router
  .route("/getLeadbyTeamLeaderidandwithstatus")
  .post(auth, getLeadbyTeamLeaderidandwithstatus); // for all lead Page By TL Id
router
  .route("/getLeadbyGroupLeaderidandwithstatus")
  .post(auth, getLeadbyGroupLeaderidandwithstatus); // for all lead Page By TL Id
router
  .route("/getLeadbyTeamLeaderidandwithoutstatus")
  .post(auth, getLeadbyTeamLeaderidandwithoutstatus); // for all lead Page By TL Id Without Win ,Loss
router
  .route("/getLeadbyGroupLeaderidandwithoutstatus")
  .post(auth, getLeadbyGroupLeaderidandwithoutstatus); // for all lead Page By TL Id Without Win ,Loss
router.route("/get_All_Lead_Followup").get(auth, getAllLeadFollowup); // for followuppage
router.route("/BulkLeadUpdate").put(auth, BulkLeadUpdate);
router.route("/LeadTransfer").put(auth, LeadTransfer);
router.route("/BulkDeleteLead").delete(auth, BulkDeleteLead);
router.route("/UpdateLeadByLeadId/:id").put(auth, UpdateLeadByLeadId);
router.route("/leadattechmenthistory/:id").get(auth, leadattechmenthistory);
router
  .route("/deleteLeadAttechmentHistory/:id")
  .delete(auth, deleteLeadAttechmentHistory);

router.route("/getLeadbyScheduleEventid").post(auth, getLeadbyScheduleEventid); ///////get All ScheduleEvent Lead

// router.route("/BulkLeadUplodeExcel",upload.single('file')).post(BulkLeadUplodeExcel);

module.exports = router;
