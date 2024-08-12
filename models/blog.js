const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Blog = sequelize.define("blog", {
    blogid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    baslik: {
        type: DataTypes.STRING,
        allowNull: false
    },
    altbaslik: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aciklama: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    resim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anasayfa: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    onay: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    categoryid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

async function sync() {
    await Blog.sync({force: true});
    console.log("blog tablosu eklendi");

    const count =await Blog.count();
    if(count==0){
         await Blog.create({
     baslik:"Komple Uygulamalı Web Geliştirme Eğitimi",
     altbaslik:"HTML,CSS,ASP.Net",
     aciklama:"Komple bir site tasarımı",
     resim:"1.jpeg",
     anasayfa:true,
     onay:true,
     categoryid:1
  });

    await Blog.create({
     baslik:"Python Uygulamalı Web Geliştirme Eğitimi",
     altbaslik:"Python dersleri",
     aciklama:"En kolay yazılımı",
     resim:"2.jpeg",
     anasayfa:true,
     onay:true,
     categoryid:2
  });
}
    }

   



sync();

module.exports = Blog;