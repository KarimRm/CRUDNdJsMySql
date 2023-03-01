const controller = {};

controller.list =  (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM user', (err, users) => {
            if (err) {
                res.json(err);
            }
            console.log(users);
            res.render('users', {
                data: users
            })
        });
    });
};

controller.agregar = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user SET ?', [data], (err, user) =>{
            res.redirect('/');
        })
    })
};


controller.editar = (req, res) => {
    const {ID} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user WHERE ID = ?', [ID],(err, user) =>{
            res.render('users_edit',{
                data: user[0]
            })
        })
    })
} 

controller.actualizar = (req, res) => {
    const {ID} = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE user SET ? WHERE ID = ?', [newUser, ID], (err, rows) => {
            res.redirect('/');
        })
    })
} 




controller.borrar = (req, res) => {
    const {ID} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM user WHERE ID = ?', [ID], (err, user) => {
            res.redirect('/');
        })
    })
};



module.exports = controller;