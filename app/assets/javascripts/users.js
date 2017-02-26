// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$('form')
  .form({
    fields: {
      name: {
        identifier : 'user[name]',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a name'
          }
        ]
      },
      email: {
        identifier : 'user[email]',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a valid email'
          }
        ]
      },
      password: {
        identifier : 'user[password]',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          }
        ]
      },
      password_confirmation: {
        identifier : 'user[password_confirmation]',
        rules: [
          {
            type   : 'empty',
            prompt : 'Password confirmation required'
          },
          {
            type   : 'match[user[password]]',
            prompt : 'Password fields must match'
          }
        ]
      }
    }
  })
;
