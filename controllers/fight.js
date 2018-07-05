const match = (req, res) => {
    const { choice } = req.body;
    res.json(choice)
}

module.exports = {
    match: match
}