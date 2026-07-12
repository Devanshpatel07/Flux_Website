const express = require("express");
const router = express.Router();

const {
    registerParticipant,
    getRegistrationStatus,
} = require("../controllers/fluxWaveController");

// POST /api/fluxwave/register
router.post("/register", registerParticipant);

// GET /api/fluxwave/status?email=someone@example.com
router.get("/status", getRegistrationStatus);

module.exports = router;
