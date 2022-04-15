"use strict";
/*eslint-disable*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

window.addEventListener('load', function () {
  const urlParamas = new URLSearchParams(window.location.search);
  if (urlParamas.entries().length == 0)
    return;
  document.getElementsByName("validationCustom01")[0].value = urlParamas.get("validationCustom01");
  document.getElementsByName("validationCustom04")[0].value = urlParamas.get("validationCustom04");
  document.getElementsByName("validationCustom05")[0].value = urlParamas.get("validationCustom05");
  // document.getElementsByName("inlineRadio1").value = urlParamas.get("inlineRadio1");
  // document.getElementsByName("inlineRadio2").value = urlParamas.get("inlineRadio2");

  // if(urlParamas.get("inlineRadioOptions").length == 0 )
  // return;
  // for (let eachOption of document.getElementsByName("inlineRadioOptions")[0].options) {
  //   if (urlParamas.get("inlineRadioOptions").split(",").includes(eachOption))
  //     eachOption.selected = true;
  //   else
  //     eachOption.selected = false;
  // }


  if (urlParamas.get('select').length == 0)
    return;
  for (let eachOption of this.document.getElementsByName('select')[0].options) {
    if (urlParamas.get('select').split(",").includes(eachOption))
      eachOption.selected = true;
    else
      eachOption.selected = false;
  }
  
  // document.getElementsByName("invalidCheck2")[0].value = urlParamas.get("invalidCheck2");
  // document.getElementsByName("invalidCheck3")[0].value = urlParamas.get("invalidCheck3");

});