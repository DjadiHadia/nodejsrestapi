const Client = require('../models/client'); // Correct import statement

// Get all clients
exports.getClients = (req, res, next) => {
    Client.findAll()
        .then(clients => {
            res.status(200).json({ clients: clients });
        })
        .catch(err => console.log(err));
}

// Get client by id
exports.getClient = (req, res, next) => {
    const clientId = req.params.clientId; // Corrected carId to clientId
    Client.findByPk(clientId)
        .then(client => {
            if (!client) {
                return res.status(404).json({ message: 'Client not found!' });
            }
            res.status(200).json({ client: client });
        })
        .catch(err => console.log(err));
}

// Create client
exports.createClient = (req, res, next) => {
    const { name, email, phone } = req.body; // Destructuring req.body
    Client.create({
        name: name,
        email: email,
        phone: phone
    })
    .then(result => {
        console.log('Created Client');
        res.status(201).json({
            message: 'Client created successfully!',
            client: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err.message }); // Handle error response
    }); 
}

// Update client
exports.updateClient = (req, res, next) => {
    const clientId = req.params.clientId;
    const { name, email, phone,adress } = req.body; // Destructuring req.body
    Client.findByPk(clientId)
        .then(client => {
            if (!client) {
                return res.status(404).json({ message: 'Client not found!' });
            }
            client.name = name;
            client.email = email;
            client.phone = phone;
            client.adress = adress;
         
            return client.save();
        })
        .then(result => {
            res.status(200).json({ message: 'Client updated!', client: result });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err.message }); // Handle error response
        });
}

// Delete client
exports.deleteClient = (req, res, next) => {
    const clientId = req.params.clientId;
    Client.findByPk(clientId)
        .then(client => {
            if (!client) {
                return res.status(404).json({ message: 'Client not found!' });
            }
            return Client.destroy({
                where: {
                    id: clientId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'Client deleted!' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err.message }); // Handle error response
        });
}
