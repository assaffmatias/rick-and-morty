let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body)
    return res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    const favFiltered = myFavorites.filter((char) => {
        return char.id !== id; // CHECK TO TYPEOF
    });
    myFavorites = favFiltered;
    return res.json(myFavorites);
};

module.exports = { postFav, deleteFav };