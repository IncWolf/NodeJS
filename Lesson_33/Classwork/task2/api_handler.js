/**
 * Created by IncWolf on 09.10.2016.
 */
users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];
module.exports = {

    getUsers: function (req, res) {
        res.send(JSON.stringify(users));
    },

    postUsers: function(req, res) {
        var newItem = {
            name: 'Sergey',
            age: 25
        };
        users.push(newItem);
        res.send(users);
    }
};
