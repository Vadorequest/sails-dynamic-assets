var controllerHelper = {
  _setDefaultSession: function(req){
    req.session.user = req.session.user ? req.session.user : {};
    req.session.user.connected = req.session.user.connected ? req.session.user.connected : false;

  },

  /**
   * Set default locals.
   * Bind automatically the content into each views, even partials called by the main view. Don't erase native res.locals (bind by the sails middleware) but override/add them.
   *
   * @param req
   * @param res
   * @param options
   */
  _setDefaultLocals: function(req, res, options){
    controllerHelper._setDefaultSession(req);

    res.locals.controller = req.options.controller;
    res.locals.action = req.options.action;
    res.locals.currentUser = req.session.user;
    res.locals._layout = options._layout || 'default';
    res.locals.theme = options.theme || 'default';
    res.locals.flash = req.flash ? req.flash() : {};
  },

  /**
   * Render the view.
   * Set default locals before to render it.
   *
   * @param req
   * @param res
   * @param view      View path to render from the /views/ folder.
   * @param options   Options to provide to the view.
   */
  renderView: function(req, res, options){
    controllerHelper._setDefaultLocals(req, res, options);

    res.view(options.view, options || {});
  }
};

module.exports = controllerHelper;
