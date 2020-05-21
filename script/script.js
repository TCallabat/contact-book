let contacts_book = [];

class Contact {
  constructor(firstname, lastname, email, phone, status, type) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.status = status;
    this.type = type;
  }
}

function create_contact(form) {
  const data = new FormData(form);
  let contact = new Contact(
    data.get("firstname"),
    data.get("lastname"),
    data.get("email"),
    data.get("phone"),
    data.get("status"),
    data.get("type")
  );
  return contact;
}

function create_table(contact) {
  $("table tbody").append(
    "<tr><td>" +
      contact.lastname +
      "</td><td>" +
      contact.firstname +
      "</td><td>" +
      contact.email +
      "</td><td>" +
      contact.phone +
      "</td><td>" +
      contact.status +
      "</td><td>" +
      contact.type +
      "</td></tr>"
  );
}

function submit_event() {
  $("form").submit(function (event) {
    event.preventDefault();
    const form = $("#form_create")[0];
    const contact = create_contact(form);
    create_table(contact);
    contacts_book.push(contact);
    $("input").val("");
  });
}

function myFunction() {
  const filter = $("#search").val();
  const trs = document.querySelectorAll("#table tr:not(.header)");
  trs.forEach(
    (tr) =>
      (tr.style.display = [...tr.children].find((td) =>
        td.innerHTML.includes(filter)
      )
        ? ""
        : "none")
  );
}

submit_event();