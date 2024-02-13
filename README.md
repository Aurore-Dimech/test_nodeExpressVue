To test this project, you'll need a MySQL database.

Enter those lines :
CREATE TABLE associations(
    association_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    association_name VARCHAR(50) NOT NULL,
    association_description TEXT,
    association_category VARCHAR(30),
    association_representative_name VARCHAR(30),
    association_representative_surname VARCHAR(30),
    association_mail VARCHAR(200),
    association_phone VARCHAR(20),
    association_adress VARCHAR(200),
    association_town VARCHAR(50),
    association_postal_code VARCHAR(10),
    association_complement_address VARCHAR(200),
    association_longitude VARCHAR(50),
    association_latitude VARCHAR(50)
)

To start the servers, enter "npm run dev" in the frontend folder, and "npm start" in the backend one.

If you run into any trouble, please let me know so I can fix it !