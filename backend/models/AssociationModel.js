import db from "../config/database.js"

export const getAssociations = (result) => {
    db.query("SELECT * FROM associations", (err, results) => { 
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results)
        }
    })
}

export const getAssociationById = (id, result) => {
    db.query("SELECT * FROM associations WHERE association_id = ?",
    [id],
    (err, results) => {
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results[0])
        }
    })
}

export const searchedAssociations = (search, result) => {
    db.query("SELECT * FROM associations WHERE association_name LIKE ? OR association_description LIKE ? OR association_representative_name LIKE ? OR association_representative_surname LIKE ? OR association_adress LIKE ? ORDER BY association_name ASC", [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`],
    (err, results) => {
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results)
        }
    })
}

// export const searchedAssociations= (search) => {
//         db.query("SELECT association_id FROM associations WHERE association_name LIKE ? OR association_description LIKE ? OR association_representative_name LIKE ? OR association_representative_surname LIKE ? OR association_adress LIKE ? ORDER BY association_name ASC", [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`],
//         (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(results);
//     }
//   });
// }

export const insertAssociation = (data, result) => {
    db.query("INSERT INTO associations SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results.insertId)
        }
    })
}

export const updateAssociationById = (data, id, result) => {
    db.query("UPDATE associations SET association_name = ?, association_description = ?, association_representative_name = ?, association_representative_surname = ?, association_mail = ?, association_phone = ?, association_adress = ?, association_town = ?, association_postal_code = ?, association_complement_address = ?, association_longitude = ?, association_latitude = ? WHERE association_id = ?",
    [data.association_name, data.association_description, data.association_representative_name, data.association_representative_surname, data.association_mail, data.association_phone, data.association_adress, data.association_town, data.association_postal_code, data.association_complement_address, data.association_longitude, data.association_latitude, id],
    (err, results) => {
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results[0])
        }
    })
}

export const deleteAssociationById = (id, result) => {
    db.query("DELETE FROM associations WHERE association_id = ?", [id], (err, results) => {
        if(err){
            console.log(err);
            result(err,null)
        } else {
            result(null, results[0])
        }
    })
}