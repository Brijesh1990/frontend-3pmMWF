Installation of Sass (For Website Designing)
Method 1: Using Node.js (Recommended)
Step 1: Install Node.js

Download and install Node.js from the official website.

Step 2: Install Sass  

Open Command Prompt or Terminal and run:

npm install -g sass    global
or
npm install sass

Step 3: Check Installation
sass --version

Step 4: Compile Sass to CSS

Create a Sass file:

style.scss

Convert it to CSS:

sass style.scss style.css

Step 5: Watch Mode (Auto Compile)
sass --watch style.scss:style.css

Method 2: Using VS Code Extension (Easy for Beginners)

Open VS Code

Install Live Sass Compiler

Click Watch Sass

It automatically creates a .css file