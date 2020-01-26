# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


https://tix-tix.herokuapp.com/v1
## API Endpoints
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
    <tr>
      <td>POST</td>
      <td>/api/user/create/</td>
      <td>Register a User</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/user/login/</td>
    <td>Login a user</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/category/categories/</td>
    <td>Get all categories</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/category/categories/</td>
    <td>Create a new category</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/favorite/favorites/</td>
    <td>Create a favorite thing</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/favorite/favorites/</td>
    <td>Get all favorite things</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/favorite/favorites/{int:id}</td>
    <td>Get the details of a favorite thing</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/favorite/favorites/?category_id={int: categoryId}</td>
    <td>Get all favorite thing in category</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/favorite/favorites/{int:id}</td>
    <td>Update a favorite thing</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/favorite/history/</td>
    <td>Get audit log for user</td>
  </tr>
</table>
