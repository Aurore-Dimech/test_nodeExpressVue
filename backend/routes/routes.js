import express from "express"

import {
    showAssociations,
    showAssociationById,
    createAssociation,
    updateAssociation,
    deleteAssociation,
} from "../controllers/association.js";

const router = express.Router();

router.get("/associations", showAssociations)

router.get("/associations/:id", showAssociationById)

router.post('/associations', createAssociation)

router.put('/associations/:id', updateAssociation)

router.delete('/associations/:id', deleteAssociation)

export default router;