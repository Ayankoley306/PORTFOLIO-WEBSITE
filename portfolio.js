document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
    });
});
// SKILL SECTION 
let details = document.querySelector(".details");
let basic = document.querySelector("#basic-btn");
let html = document.querySelector("#html-btn");
let css = document.querySelector("#css-btn");
let js = document.querySelector("#javascript-btn");
details.innerHTML = `<article id="basic" class="data"><h4>Basic On Computer</h4><p> I have successfully completed my Basic Computer Training from a local computer academy</p><p>During this course, I learned the fundamentals of computer operations including <strong> Office (Word, Excel, PowerPoint), basic file management, internet browsing, and email handling</strong>. This training helped me become confident in using computers for daily tasks and academic work.</p></article>`;
basic.addEventListener("click", () => {
  details.innerHTML = `<article id="basic" class="data"><h4>Basic On Computer</h4><p> I have successfully completed my Basic Computer Training from a local computer academy</p><p>During this course, I learned the fundamentals of computer operations including <strong> Office (Word, Excel, PowerPoint), basic file management, internet browsing, and email handling</strong>. This training helped me become confident in using computers for daily tasks and academic work.</p></article>`
});
html.addEventListener("click", () => {
  details.innerHTML = `<article id="html"class ="data"><h4>HTML</h4><p>I’ve started my web development journey by learning <strong>HTML (HyperText Markup Language)</strong> — the basic building block of all websites.</p><p>With HTML, I’ve learned how to structure webpages using elements like headings, paragraphs, images, and links. It was my first step into the world of coding, and it made me excited to explore more — like CSS and JavaScript.</p></article>`
});
css.addEventListener("click", () => {
  details.innerHTML = `<article id="css" class="data"><h4>Css</h4><p>Alongside my HTML adventures, I've been diving into <strong>CSS (Cascading Style Sheets)</strong>, which has been a game-changer in making my web pages look beautiful and professional.</p><h5>Some Of My Css Projects</h5><span><a href="smallprojects/AMAZON CLONE/amazon.html">Amazon clone</a><a href="smallprojects/LOGIN PAGE/input.html">Login page</a></span></article>`
});
js.addEventListener("click", ()=> {
  details.innerHTML = `<article id="javascript" class="data"><h4>javaScript</h4><p> I’ve recently started exploring the world of <strong>JavaScript (JS)</strong>—the language that brings websites to life.</p><h5>Some Of My Java script projects</h5><span><a href="smallprojects/CLOCK APP/clock.html">Digital Clock</a><a href="smallprojects/ROCK PAPER SCISSORS GAME/index.html">Rock Paper Scissor Game</a><a href="smallprojects/TIC TAC TOE/index.html">Tic Tac Toe Game</a><a href="smallprojects/COLOUR GUESSING GAME/index.html">Color Guessing Game</a>
<a href="smallprojects/GET RANDOM COLOR WITH RGB AND HEX CODE/index.html">Random Colour App</a></span></article>`
});

//EDUCATION SECTIONS
document.querySelector("#madhamik").addEventListener("click", () => {
  if(document.querySelector(".para-m").innerHTML === "") {
    document.querySelector(".para-m").innerHTML = `<p><strong>Exam Board:</strong> WestBengal boards Of Higher Secondery Educations</p><p><strong>Total Marks:</strong> 520 Out Of 700</p><p><strong>percentage:</strong> 74.28%</p><p><strong>Passing Year:</strong> 2023</p><p>From <strong>Singur Mahamaya High School</strong></p>`;
} else {
  document.querySelector(".para-m").innerHTML = "";
};
});
document.querySelector(".hs-btn").addEventListener("click", ()=> {
  if(document.querySelector(".para-hs").innerHTML === ""){
      document.querySelector(".para-hs").innerHTML = `<p><strong>Exam Board:</strong> WestBengal Councile Of Higher Secondery Educations</p><p><strong>Total Marks:</strong> 466 Out Of 500(Best Of Five)</p><p><strong>percentage:</strong> 93.2%</p><p><strong>Passing Year:</strong> 2025</p><p>From <strong>Singur Mahamaya High School</strong></p>`;
  } else {
    document.querySelector(".para-hs").innerHTML = "";
  }
})
document.querySelector(".bca-btn").addEventListener("click", () => {
  if(document.querySelector(".para-bca").innerHTML === ""){
    document.querySelector(".para-bca").innerHTML = `<p><strong>University:</strong> Maulana Abul Kalam Azad University of Technology(MAKAUT)</p><p><strong>Year:</strong> 1<sup>th</sup> Year, 1<sup>th</sup> semestor</p><p><strong>Academic Years:</strong> 2025-2029</p><p>From<strong> Techno India, Hooghly</strong></p>`
  } else {
    document.querySelector(".para-bca").innerHTML = "";
  }
})