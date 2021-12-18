class HomeController {
    static async home(req, res) {
        res.send("Todo App is running")
    }
}
module.exports = HomeController;