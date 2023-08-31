/** Routes for invoices of biztime app */

const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");

// GET ALL INVOICES FROM DATABASE
router.get("/", async (req, res, next) => {
	// Making sure to try and catch any error that may occur as
	// we wait the async db.query promise response
	try {
		// PAM: making sql quries db.query(`SQL STRING`)
		console.log("Getting all Invoices....");
		const results = await db.query(`SELECT * FROM invoices`);
		// console.log(results.rows);
		return res.json({ invoices: results.rows });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
