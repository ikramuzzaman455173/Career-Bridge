<h1 align="center">CarrierBridge all api use proper guideline</h1>

---

[//]: # (Table of Content)

<a name="top"></a>

## Table Of Contents 🙋‍♂️ content

> Click on any topic to go there

- [User Api User API Documentation](#user)
  - [User Get Api](#user-get)
  - [User Add Api](#user-add)
  - [User Update Api](#user-update)
  - [User Delete Api](#user-delete)

<!-- - [](#js-2)
- [](#js-3)
- [](#js-4)
- [](#js-5) -->


***

<a name="user"></a>

**User API Documentation**

CarrierBridge provides a User API that allows you to manage user-related operations. This API includes the following endpoints:

<a name="user-get"></a>

1. **User Get API**
   - Endpoint: `/api/users`
   - Method: GET
   - Description: Retrieve a list of all users in the system.

   **Usage Example:**
   To fetch a list of all users, make a GET request to `/api/users`. This will return a JSON response containing user data.

##### [Go to top:arrow_up: ](#top)

<a name="user-add"></a>

2. **User Add API**
   - Endpoint: `/api/newUser`
   - Method: POST
   - Description: Add a new user to the system.

   **Usage Example:**
   To add a new user, make a POST request to `/api/newUser` with a JSON request body containing user information, such as username, email, and password. The server will create a new user and return a confirmation message.

   ```json
   POST /api/newUser
   Request Body:
   {
       "name": "newuser123",
       "email": "newuser@example.com",
       "image": "https://images.unsplash.com/photo.jpg"
       // Add other user details here as needed
   }
   ```

##### [Go to top:arrow_up: ](#top)

<a name="user-update"></a>

3. **User Update API**
   - Endpoint: `/api/userUpdate/:id`
   - Method: PUT or PATCH
   - Description: Update an existing user's information, identified by their unique `id`.

   **Usage Example:**
   To update a user's information, make a PUT or PATCH request to `/api/userUpdate/:id`, where `:id` is the unique identifier of the user you want to update. Provide a JSON request body with the fields you wish to update.

   ```json
   PUT /api/userUpdate/123
   Request Body:
   {
       "email": "updatedemail@example.com",
       // Update other user details here as needed
   }
   ```

##### [Go to top:arrow_up: ](#top)

<a name="user-delete"></a>

4. **Delete User API**
   - Endpoint: `/api/deleteUser/:id`
   - Method: DELETE
   - Description: Delete a user from the system, identified by their unique `id`.

   **Usage Example:**
   To delete a user, make a DELETE request to `/api/deleteUser/:id`, where `:id` is the unique identifier of the user you want to delete.

   ```
   DELETE /api/deleteUser/123
   ```

Please ensure that you replace placeholders like `:id` with actual values when making API requests. Additionally, consider implementing proper authentication and authorization mechanisms as required by the CarrierBridge API. For more specific details and any additional headers or parameters needed for authentication, consult the CarrierBridge API documentation or reach out to the API provider.


##### [Go to top:arrow_up: ](#top)
