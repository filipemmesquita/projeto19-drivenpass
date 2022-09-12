# projeto19-drivenpass
An API for a password manager.

## Routes

### post/users/new
Creates a new user.
```json
{
"email":"a valid email here",
"passsword":"any string here"
}
```
### post/users/login
Logins a user, returns a JWT token containing email and user ID.
```json
{
"email":"a valid email here",
"passsword":"any string here"
}
```

#### All routes bellow require a header "Authorization" containing a valid JWT token given when loggin in

### post/credentials/new
Creates a set with a title, an username, a password, and an url.
Requires a body:
```json
{
  "title":"Any string under 50 characters",
  "userName":"any string",
  "password":"any string",
  "url":"any URL"
}
```
### get/credentials/all
Returns all credentials the logged user has made. Does not display passwords.

### get/credentials/:credentialId
Returns all information from the credential with the specified ID, if logged user is the owner. Does display passwords.

### delete/credentials/:credentialId
If logged user is the owner, deletes specified credential.

### post/notes/new
Creates a set with a title and a note.
Requires a body:
```json
{  
"title":"any string under 50 characters",
"note":"any string"
}
```
### get/notes/all
Returns all notes the logged user has made.

### get/notes/:noteId
Returns the specified note, if logged user is the owner.

### delete/notes/:noteId
If logged user is the owner, deletes specified note.

### post/cards/:cardId
Creates a set with a card's informations. 
Requires a body:
```json
{
  "title":"any string under 50 characters",
  "number":"a string of 16 characters",
  "holderName":"any string",
  "cvc":"a string of 3 characters",
  "expiryDate":"a string of 5 characters",
  "password":"a string of 4 characters",
  "type": "either 'credt', 'debit' or 'both'"
}
```
### get/cards/all
Returns all cards the logged user has made. Does not display passwords nor security codes.

### get/cards/:cardId
Returns all information from the credential with the specified ID, if logged user is the owner. Does display passwords and security codes.

### delete/notes/:cardId
If logged user is the owner, deletes specified card.

### post/wifis/new
Creates a set with a wifi's credentials. 
Requires a body:
```json
{
  "wifiName":"any string",
  "title":"any string under 50 characters",
  "password":"any string"
}
```
### get/wifis/all
Returns all wifi credentials the logged user has registered. Does not display passwords.

### get/wifis/:wifiId
Returns all information from the wifi credentials with the specified ID, if logged user is the owner. Does display passwords.

### delete/wifi/:wifiId
If logged user is the owner, deletes specified wifi entry.
