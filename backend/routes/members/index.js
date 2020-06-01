const express = require('express');
const router = express.Router();
// router.use('/membershipOfficer/membership', require('./membership/MemberShip'));
router.use('', require('./membersRequests'));
router.use('/membership',require('./memberShipCard'))
module.exports = router;