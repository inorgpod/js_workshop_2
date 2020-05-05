// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//select2
import 'select2'
import 'select2/dist/css/select2.css'

import $ from 'jquery'
window.$ = window.jQuery = $
// window.$ = $

//sweetalert2
import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.all.min.js'
window.Swal = Swal
import 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'
$(document).on("turbolinks:load", function(){
  $('.js-submit-btn').click(function(e){
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You will create a product!?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
            showConfirmButton: false,
            title: 'Loading...'
          },
        )
        $('.js-form').submit()
      }
    })
  })
})





//datetimepicker
import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'

// Fontawesome
// import 'font-awesome'