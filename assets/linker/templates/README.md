# Templates
A template and a partial are basically the same thing excepted that a partial is available only in the server side while a template is available in both client and server sides.

Templates that are located into assets/linker/templates are also available from the client side. (Using `__view.template('box')`)

Partials are located into the folder `views`.

## Include a template
The simplest way to include a template is using ejs-locals (integrated by sails.js):
`<%-partial('../../assets/linker/templates/box', {box_content: 'test'}) %>`

The path is relative to the view that has been called.

More info at: https://www.npmjs.org/package/ejs-locals

## Box

### Client
Use the box template with `subTemplates`.
```
    
    $(function(){
        $( '.authentication' ).after(
            __view.template('box', {
                box_class: 'box col-sm-6',
                box_title: 'Box',
                box_content: __view.subTemplate('<b>Role: <%= currentUser.role %></b>'),
                box_title_icon: __view.subTemplate('<i class="fa fa-users"></i>')
            })
        )
    });
```

Use the box template with `subTemplates` but simple icon.
```
    
    $(function(){
        $( '.authentication' ).after(
            __view.template('box', {
                box_class: 'box col-sm-6',
                box_title: 'Box',
                box_content: __view.subTemplate('<b>Role: <%= currentUser.role %></b>'),
                box_title_icon: 'fa-users'
            })
        )
    });
```

### Server
`<%-partial('../../assets/linker/templates/box', {box_content: 'test'}) %>`


## Include a template inside another template
Waiting for https://github.com/RandomEtc/ejs-locals/issues/42