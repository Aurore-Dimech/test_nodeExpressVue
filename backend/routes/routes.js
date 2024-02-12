import express from "express"

import {
    showAssociations,
    showAssociationById,
    showSearchedAssociations,
    createAssociation,
    updateAssociation,
    deleteAssociation,
} from "../controllers/association.js";

const router = express.Router();

router.get("/associations", showAssociations)

router.get("/associations/:id", showAssociationById)

router.get("/associations/search/:term", showSearchedAssociations)

router.post('/associations', createAssociation)

router.put('/associations/:id', updateAssociation)

router.delete('/associations/:id', deleteAssociation)

export default router;