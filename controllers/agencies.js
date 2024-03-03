const Agency = require('../models/agency');



//get all agen
exports.getAgencies = (req, res, next) => {
    Agency.findAll()
        .then(agencies => {
            res.status(200).json({ agencies: agencies });
        })
        .catch(err => console.log(err));
}

// Get agency by id
exports.getAgencyById = (req, res, next) => {
    const agencyId = req.params.agencyId;
    Agency.findByPk(agencyId)
        .then(agency => {
            if (!agency) {
                return res.status(404).json({ message: 'Agency not found' });
            }
            res.status(200).json({ agency: agency });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
}


// Create agency
exports.createAgency = (req, res, next) => {
    const { name, address, phone, email } = req.body;
    Agency.create({
        name: name,
        address: address,
        phone: phone,
        email: email
    })
    .then(agency => {
        res.status(201).json({ message: 'Agency created', agency: agency });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
}

// Update agency
exports.updateAgency = (req, res, next) => {
    const agencyId = req.params.agencyId;
    const { name, address, phone, email } = req.body;
    Agency.findByPk(agencyId)
        .then(agency => {
            if (!agency) {
                return res.status(404).json({ message: 'Agency not found' });
            }
            agency.name = name;
            agency.address = address;
            agency.phone = phone;
            agency.email = email;
            return agency.save();
        })
        .then(agency => {
            res.status(200).json({ message: 'Agency updated', agency: agency });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
}

// Delete agency
exports.deleteAgency = (req, res, next) => {
    const agencyId = req.params.agencyId;
    Agency.findByPk(agencyId)
        .then(agency => {
            if (!agency) {
                return res.status(404).json({ message: 'Agency not found' });
            }
            return agency.destroy();
        })
        .then(() => {
            res.status(200).json({ message: 'Agency deleted' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
}
