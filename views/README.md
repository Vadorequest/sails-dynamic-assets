# Views

Server automated error responses are present directly inside the `views` folder. They must use the HTTP error code as filename.

## Layouts
The layouts are located inside the special `_layouts` folder. A layout is a template used by a group of views.
It represents a global design for a part of the application.

## Controller views
Each controller must have a folder with the controller's name in the `views` folder, except if the controller doesn't use any view. *(Webservice type with JSON response, basically)*
Inside the controller's folder we have the views that belongs to this specific controller. We have a view for each controller's action, the view filename must be the controller's action name.

**Example**:

- **Controller**: `Home`
    - **Action**: `index`

We have in the `views` folder:

- `home` folder
    - `index.ejs` view.
    
The controllers will use this system by default to display the content, so if you want to add a controller's action, just create the controller's method and the EJS file, the link is automatic.

## Shared partials
Some partials needs to be shared among different views.

- If these views are in the same controller then you just need to create the partial inside the controller folder. **Note that all partials must start by `_`.**
- If these views belong to several controllers then you need to create the partial inside the `_shared` folder. **Note that all partials must start by `_`.**

## Application's sub modules
It is possible to have a sub part for the application. For instance we have the **dashboard**.
To access to a dashboard controller, we just need to add the name of the controller's module: http://localhost:5000/dashboard/application/create

This URL will call the `controllers/dashboard/Application.ts#create` *(through applicationController.js)*

The sub modules work exactly the same as the native controllers/views. No difference. There is no limit, you can use as many sub modules as you want and use a sub module inside another sub module too.