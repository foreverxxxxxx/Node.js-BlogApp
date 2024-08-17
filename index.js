const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes); 

const sequelize = require("./data/db");
const dummyData = require("./data/dummy-data");
const Category = require("./models/category");
const Blog = require("./models/blog");

Category.hasMany(Blog, {
    foreignKey: {
        name: 'categoryId',
        allowNull: false,
        // defaultValue: 1
    }
});
Blog.belongsTo(Category);



// IIFE
(async () => {
    await sequelize.sync({ force: true });
    await dummyData();
})();


app.listen(3000, function() {
    console.log("listening on port 3000");
});