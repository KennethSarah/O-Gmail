


"use strict";

const data = [
  // 1
  {
    sender: "Unknown",
    date: "20:15",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 2
  {
    sender: "Twitter",
    date: "07:13",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  //  3
  {
    sender: "The Punch",
    date: "05:01",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 4
  {
    sender: "Instagram",
    date: "Jan 11",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 5
  {
    sender: "Qatar",
    date: "Nov 24",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 6
  {
    sender: "John Mark",
    date: "Oct 26",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 7
  {
    sender: "Whatsapp",
    date: "Dec 21",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 8
  {
    sender: "Google",
    date: "Dec 10",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 9
  {
    sender: "Twitter",
    date: "May 20",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 10
  {
    sender: "Facebook",
    date: "Feb 23",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 11
  {
    sender: "Tiktok",
    date: "Jun 25",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 12
  {
    sender: "Whatsapp",
    date: "Sep 28",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 13
  {
    sender: "Upwork",
    date: "Jan 17",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 14
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 15
  {
    sender: "Facebook",
    date: "Apr 23",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 16
  {
    sender: "Instagram",
    date: "Jul 23",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      "NOT ADMITTED ON MERIT, HERE'S 5 REASONS WHY - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];


const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages">
  <div class="messages_left">
    <div class="check check_2">
      <img src="./img/checkbox.png" alt="" />
      <span> <ion-icon name="checkmark"></ion-icon> </span>
    </div>
    <ion-icon name="star-outline" class="hover star"></ion-icon>
    <span>${d.sender}</span>
  </div>
  <div class="messages_content">${d.message}</div>
  <div class="messages_date">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);
