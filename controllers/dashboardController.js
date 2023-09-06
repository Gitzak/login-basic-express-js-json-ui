// Function to render the dashboard page
function renderDashboard(req, res) {
    const user = req.decoded;;
    res.render('app/dashboard', user);
}

// Export the function as a module
module.exports = {
    renderDashboard,
};
