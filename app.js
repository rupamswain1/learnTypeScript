"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1["default"].get(url)
    .then(function (response) {
    var post = response.data;
    var userId = post.userId;
    var id = post.id;
    var title = post.title;
    printData(userId, id, title);
});
var printData = function (userId, id, title) {
    console.log("\n    user id is " + userId + ", \n    id is " + id + " \n    and title is " + title + "\n    ");
};
