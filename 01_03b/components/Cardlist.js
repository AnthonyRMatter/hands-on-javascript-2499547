import Card from "./Card.js";

const cardListItem = (imgData) => {
  return `
    <li class"cardlist_item">
      ${Card(imgData)}
    </li>
  `;
};

// Should result in photos being side by in display but they are vertically formatted for some reason. Refer to 01_3e code for corrrect display.
const Cardlist = (data) => {
  return `
    <link href="components/cardlist.css" rel="stylesheet" />
    <section class="cardlist">
      <ul class="cardlist_list">
        ${data.map((imgData) => cardListItem(imgData)).join("")}
      </ul>
    </section>
  `;
};

export default Cardlist;
