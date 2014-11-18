/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  /**
   * Display the user page.
   *
   * @param req
   * @param res
   */
  index: function(req, res){
    req.session.user = req.session.user ? req.session.user : {};
    var options = {
      title: 'User page',
      view: 'user/index'
    };

    req.flash('messages', {message: options.title, options: {type: 'info', placement: {from: 'bottom'}}});

    controller.renderView(req, res, options);

  }
};

