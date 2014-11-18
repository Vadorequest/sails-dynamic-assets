/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  /**
   * Display the homepage depending on whether the user is logged in or not.
   *
   * @param req
   * @param res
   */
  index: function(req, res){
    req.session.user = req.session.user ? req.session.user : {};
    var options = {
      title: 'Home',
      view: 'home/index'
    };

    //req.flash('messages', {message: options.title, options: {type: 'info', placement: {from: 'bottom'}}});

    controller.renderView(req, res, options);

  },

  /**
   * Simulate a logged off visitor.
   *
   * @param req
   * @param res
   */
  visitor: function(req, res){
    req.session.user = req.session.user ? req.session.user : {};
    req.session.user.connected = false;
    req.session.user.role = null;

    var options = {
      title: 'You are now a VISITOR!',
      view: 'home/index'
    };

    req.flash('messages', {message: options.title, options: {type: 'danger', placement: {from: 'top'}}});

    controller.renderView(req, res, options);
  },

  /**
   * Simulate a logged in user.
   *
   * @param req
   * @param res
   */
  member: function(req, res){
    req.session.user = req.session.user ? req.session.user : {};

    req.session.user.connected = true;
    req.session.user.role = 'member';
    req.session.user.login = 'Admin-Fake';
    req.session.user.nickname = 'Admin-Fake';
    req.session.user.email = 'admin-fake@ayolan.com';
    req.session.user.nativeLanguage = 'en';
    req.session.user.usedLanguages = ['en', 'fr'];

    var options = {
      title: 'You are now a MEMBER!',
      view: 'home/index'
    };

    req.flash('messages', {message: options.title, options: {type: 'success', placement: {from: 'bottom'}}});

    controller.renderView(req, res, options);

  }
};

