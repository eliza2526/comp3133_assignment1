const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID!
        username: String
        email: String
        password: String
        created: String
    }

    type Employee {
        id: ID!
        firstname: String
        lastname: String
        email: String
        gender: String
        city: String
        designation: String
        salary: Float
        created: String
        updatedat: String
    }

    type Query {
        user(id: ID!): User
        users: [User]
        employee(id: ID!): Employee
        employees: [Employee]
    }

    type Mutation {
        addUser(username: String, email: String, password: String): User
        loginUser(username: String, password: String): User
        addEmployee(
            firstname: String,
            lastname: String,
            email: String,
            gender: String,
            city: String,
            designation: String,
            salary: Float,
            created: String,
            updatedat: String
        ): Employee
        updateEmployee(
            id: ID!,
            firstname: String,
            lastname: String,
            email: String,
            gender: String,
            city: String,
            designation: String,
            salary: Float,
            created: String,
            updatedat: String
        ): Employee
        deleteEmployee(id: ID!): String
    }
`);

module.exports = schema;