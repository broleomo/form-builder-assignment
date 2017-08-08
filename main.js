// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
//  (function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------

// let formFields = document.getElementById ("fields");
// for (i = 0; i <formData.length;i++) {
// //   // add labels and inputs
//
// let label = document.createElement("label");
// let input = document.createElement("input");
//
// setAttribute.label(formData[i].label, "label");
// setAttribute.input(formData[i].type, "input");
// setAttribute.input()
let form = document.getElementById ("fields");
  for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "select"){
        buildSelect (i);
     } else if
      (formData[i].type === "textarea") {
        // Build text area
        buildTextArea(i);
      }
     else {
    buildInput (i);
  }
}

  function buildInput (x) {
    let input = document.createElement("input");
    input.setAttribute("id", formData[x].id);
    input.setAttribute("type", formData[x].type);
    input.setAttribute("placeholder", formData[x].label);
    form.appendChild(input);
  }

  function buildSelect(i) {
    let select = document.createElement("select");
    select.setAttribute("id", formData[i].id);
    select.setAttribute("type", formData[i].type);
    form.appendChild(select);
    // creating options template

      for (let j = 0; j < formData[i].options.length; j++) {
        // console.log(formData[4].options);
        let option = document.createElement("option");
        // create text Node for options
          let optionContent = document.createTextNode(formData[i].options[j].label);
          option.appendChild(optionContent);
          option.setAttribute("value", formData[i].options[j].value);
          select.appendChild(option);
          // option.value = formData[j].options[j].value[j];
          // option.appendChild(option.value);
      }
  }

  function buildTextArea(z) {
    let textarea = document.createElement("textarea");
    textarea.setAttribute("label", formData[z].label);
    textarea.setAttribute("id", formData[z].id);
    textarea.setAttribute("cols", formData[z].cols);
    textarea.setAttribute("rows", formData[z].rows);
    form.appendChild(textarea);
  }
// console.log(buildSelect(4));



  // link up type, id and placeholder with content elements
  // let type1Content = formData[i].type;
  // let id1Content = formData[i].id;
  // let placeholder1Content = document.createTextNode(formData[i].label);
  // // adding element nodes to each form field
  // field1.appendChild(type1);
  // field1.appendChild(id1);
  // field1.appendChild(placeholder1);
  // // add content to each type,id and placeholder
  // type1.setAttribute("input type", type1Content);
  // id1.setAttribute("id", id1Content);
  // placeholder1.appendChild(placeholder1Content);
// }
