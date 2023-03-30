CREATE TABLE user(
	id INT AUTO_INCREMENT,
    useremail VARCHAR (60) NOT NULL,
    username VARCHAR (50) NOT NULL,
    password VARCHAR (100) NOT NULL,
    image_url VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO user (id, useremail, username, password, image_url) VALUES 
(1, "hiram@gmail.com", "hiram gabriel", "javascript2003", "https://photo.url.image.php"),
(2, "hiram@gmail.com", "juan gabriel", "typer", "https://photo.url.image.php"),
(3, "tst@gmail.com", "david gabriel", "jksjsklajk", "https://photo.url.image.php");

CREATE TABLE reviews(
	id INT AUTO_INCREMENT,
    score INT (10) NOT NULL, 
    comment VARCHAR (350) NOT NULL,
    reviews_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (reviews_id) REFERENCES user(id)
);

INSERT INTO reviews(score, comment, reviews_id) VALUES 
(10, "a professional product!", 2),
(5, "a null product!", 1),
(0, "a stupid product!", 2);

SELECT u.id, u.useremail, u.username, u.password, u.image_url FROM user u LEFT JOIN reviews r ON u.id = r.reviews_id;