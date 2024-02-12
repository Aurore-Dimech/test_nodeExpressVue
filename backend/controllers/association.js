import {
    getAssociations,
    getAssociationById,
    insertAssociation,
    updateAssociationById,
    deleteAssociationById,
    searchedAssociations,
} from "../models/AssociationModel.js";

export const showAssociations = (req, res) => {
    getAssociations((err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

export const showAssociationById = (req, res) => {
    getAssociationById(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

export const showSearchedAssociations = (req, res) => {
    searchedAssociations(req.params.term, (err, results)=> {
        if(err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

export const createAssociation = (req, res) => {
    const data = req.body;
    insertAssociation(data, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while adding the association."
            });
        } else {
            res.status(201).send({id: data});
        }
    });
}

export const updateAssociation = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateAssociationById(data, id, (err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

export const deleteAssociation = (req, res) => {
    const id = req.params.id
    deleteAssociationById(id, (err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}