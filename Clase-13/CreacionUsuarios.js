//Crear roles
db.createRole({
    role: "rolname",
    privileges: [
        {
            resource: { db: "database", collection: "collectionName"},
            actions: ["find", "insert", "update", "delete"]
        }
    ]
})

//Creación de un usuario en la base de datos
db.createUser({
    user: "username",
    pwd: "password",
    roles: []
})

//Agregar roles a usuarios ya existentes
db.grantRolesToUser(
    "username",
    [ {role: "rolname", db: "database" }]
)
