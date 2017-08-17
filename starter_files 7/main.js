
var customers = data.results
var html = "";

for (i = 0; i < customers.length; i++) {
  var detail = customers[i];

html += newCustomer(detail.picture.large, detail.name.first, detail.name.last, detail.email, detail.location.street, detail.location.city, detail.location.state, detail.location.postcode, detail.phone, detail.id.value);
}

document.querySelector('.wrapper').innerHTML = html;

function newCustomer(img, first, last, email, street, city, state, postcode, tel, ssn) {
  let post = `
        <div class="employee">
          <img src=${img}>
          <h3 class="name">${first} ${last}</h3>
          <span class="email">${email}</span>
          <ul class="locinfo">
          <li>${street}</li>
          <li>${city} ${state} ${postcode}</li>
          <li>${tel}</li>
          </ul>
          <span class="social"> ${ssn}</span>
        </div>`;
  return post;
}


//loop through all the customers
//in each loop generate some html for that specific customer.
//end of loop
//add generated html to dom or index.html page dynamically with javascript
