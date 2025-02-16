const Employee = require('../models/employee');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const root = {
    user: async ({ id }) => {
        try {
            return await User.findById(id);
        } catch (err) {
            throw new Error('Error fetching user');
        }
    },
    users: async () => {
        try {
            return await User.find({});
        } catch (err) {
            throw new Error('Error fetching users');
        }
    },
    addUser: async (args) => {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const user = new User({
            username: args.username,
            email: args.email,
            password: hashedPassword
        });
        try {
            return await user.save();
        } catch (err) {
            throw new Error('Error adding user');
        }
    },
    loginUser: async ({ username, password }) => {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                throw new Error('User not found');
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                throw new Error('Invalid password');
            }
            return user;
        } catch (err) {
            throw new Error('Login failed');
        }
    },
    employee: async ({ id }) => {
        try {
            return await Employee.findById(id);
        } catch (err) {
            throw new Error('Error fetching employee');
        }
    },
    employees: async () => {
        try {
            return await Employee.find({});
        } catch (err) {
            throw new Error('Error fetching employees');
        }
    },
    addEmployee: async (args) => {
        const employee = new Employee({
            firstname: args.firstname,
            lastname: args.lastname,
            email: args.email,
            gender: args.gender,
            city: args.city,
            designation: args.designation,
            salary: args.salary,
            created: args.created,
            updatedat: args.updatedat
        });
        try {
            return await employee.save();
        } catch (err) {
            throw new Error('Error adding employee');
        }
    },
    updateEmployee: async ({ id, ...args }) => {
        try {
            return await Employee.findByIdAndUpdate(id, { $set: args }, { new: true });
        } catch (err) {
            throw new Error('Error updating employee');
        }
    },
    deleteEmployee: async ({ id }) => {
        try {
            await Employee.findByIdAndRemove(id);
            return 'Employee deleted successfully';
        } catch (err) {
            throw new Error('Error deleting employee');
        }
    }
};

module.exports = root;