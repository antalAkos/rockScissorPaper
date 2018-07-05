const options = ["rock", "paper", "scissors"]

const match = (req, res) => {
    const { choice } = req.body;
    const computerChioce = options[Math.floor(Math.random() * options.length)];
    res.json(computerChioce)
    
    
}

module.exports = {
    match: match
}