# Assignment #6: jQuery (Selectors, Effects, Animations)

**Student:** Rakhymbay Ayazhan  
**Group:** SE-2529 
**Live Demo:** https://nurdauletovnaayashkin-crypto.github.io/web6/

## Overview
This repository contains the completed **Assignment #6: jQuery (Selectors, Effects, Animations)**. The project showcases basic and advanced features of the jQuery library, including DOM selectors, element manipulation, built-in visibility/fade/slide effects, complex sequential animations, and an interactive Accordion Menu mini-project.

## Project Structure
- `index.html` (Part 1) — Getting Started with jQuery & Selectors (Tasks 0 & 1)
- `part2.html` (Part 2) — Visibility, Fade, and Slide Effects (Tasks 2, 3 & 4)
- `part3.html` (Part 3) — DOM Manipulation, Attribute Modifiers, Live Input (Tasks 5, 6 & 7)
- `part4.html` (Part 4) — Basic, Sequential, and Combined Animations (Tasks 8, 9 & 10)
- `part5.html` (Part 5) — Mini Project: Interactive Accordion Menu (Task 11)
- `css/style.css` — Soft Pink & Berry unified stylesheet
- `js/` — Separate JavaScript files for each part of the assignment

## Features
- **Navbar:** Sticky navigation bar across all pages.
- **jQuery CDN:** Connected via CDN (v3.7.1) across all HTML documents.
- **Interactive UI:** Smooth transitions, form interaction using `.val()`, and custom accordion menu built with `.slideToggle()`.

## How to Run
1. Clone the repository:
   ```bash
   git clone [https://github.com/nurdauletovnaayashkin-crypto/web6.git](https://github.com/nurdauletovnaayashkin-crypto/web6.git)




clear
<button id="clearAllBtn" class="btn btn-danger">Clear All Tasks</button>
<div id="todoContainer"></div>
 todo

 const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

    кнопка clear calc

<input type="number" id="num1" placeholder="Number 1">
<input type="number" id="num2" placeholder="Number 2">

<button onclick="calc('+')">+</button>
<button onclick="clearCalc()">Clear</button>

<h3>Result: <span id="calcResult">0</span></h3>

JS (part3.js):
JavaScript

function clearCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("calcResult").textContent = "0";
}

<form action="#" method="POST">
  <div class="mb-3">
    <label for="phone" class="form-label">Phone:</label>
    <input type="tel" class="form-control" id="phone" placeholder="+7 700 000 0000">
  </div>

  <div class="mb-3">
    <label for="date" class="form-label">Date:</label>
    <input type="date" class="form-control" id="date">
  </div>

  <div class="mb-3">
    <label for="time" class="form-label">Time:</label>
    <input type="time" class="form-control" id="time">
  </div>

  <div class="mb-3">
    <label for="color" class="form-label">Color:</label>
    <input type="color" class="form-control form-control-color" id="color" value="#0284c7">
  </div>

  <div class="mb-3">
    <label for="file" class="form-label">Upload File:</label>
    <input type="file" class="form-control" id="file">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>