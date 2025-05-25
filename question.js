// All quiz questions categorized by topic
const allQuizData = {
  // Programming Fundamentals Quiz
  fundamentals: [
    {
      numb: 1,
      question: "What is an algorithm?",
      answer: "B. A step-by-step procedure to solve a problem",
      options: [
        "A. A programming language",
        "B. A step-by-step procedure to solve a problem",
        "C. A type of computer hardware",
        "D. A database management system",
      ],
    },
    {
      numb: 2,
      question: "What does OOP stand for?",
      answer: "A. Object-Oriented Programming",
      options: [
        "A. Object-Oriented Programming",
        "B. Operational Output Processing",
        "C. Ordered Object Process",
        "D. Overhead Object Parsing",
      ],
    },
    {
      numb: 3,
      question: "What is the time complexity of binary search?",
      answer: "B. O(log n)",
      options: ["A. O(n)", "B. O(log n)", "C. O(n log n)", "D. O(1)"],
    },
    {
      numb: 4,
      question: "Which data structure uses LIFO (Last In First Out)?",
      answer: "C. Stack",
      options: ["A. Queue", "B. Linked List", "C. Stack", "D. Tree"],
    },
    {
      numb: 5,
      question: "What is recursion?",
      answer: "D. A function that calls itself",
      options: [
        "A. A type of loop",
        "B. A database query",
        "C. A sorting algorithm",
        "D. A function that calls itself",
      ],
    },
    {
      numb: 6,
      question: "Which of the following is NOT a primitive data type?",
      answer: "D. Array",
      options: ["A. Integer", "B. Boolean", "C. Character", "D. Array"],
    },
    {
      numb: 7,
      question: "What is encapsulation in OOP?",
      answer: "A. Bundling data and methods that operate on that data",
      options: [
        "A. Bundling data and methods that operate on that data",
        "B. Creating multiple instances of a class",
        "C. Breaking down complex problems",
        "D. Converting one data type to another",
      ],
    },
    {
      numb: 8,
      question:
        "What is the difference between '==' and '===' in many programming languages?",
      answer:
        "C. '===' checks both value and type, while '==' checks only value",
      options: [
        "A. They are exactly the same",
        "B. '===' is used for strings, '==' for numbers",
        "C. '===' checks both value and type, while '==' checks only value",
        "D. '===' assigns values, '==' compares values",
      ],
    },
    {
      numb: 9,
      question: "What is a variable in programming?",
      answer: "B. A named storage location for data",
      options: [
        "A. A mathematical equation",
        "B. A named storage location for data",
        "C. A type of function",
        "D. A programming language",
      ],
    },
    {
      numb: 10,
      question:
        "Which sort algorithm has the worst time complexity in the average case?",
      answer: "C. Bubble Sort",
      options: [
        "A. Quick Sort",
        "B. Merge Sort",
        "C. Bubble Sort",
        "D. Heap Sort",
      ],
    },
  ],

  // Python Quiz
  python: [
    {
      numb: 1,
      question: "Which of the following is a mutable data type in Python?",
      answer: "B. List",
      options: ["A. String", "B. List", "C. Tuple", "D. Integer"],
    },
    {
      numb: 2,
      question: "What is the correct way to create a function in Python?",
      answer: "A. def my_function():",
      options: [
        "A. def my_function():",
        "B. function my_function():",
        "C. create my_function():",
        "D. func my_function():",
      ],
    },
    {
      numb: 3,
      question:
        "What does the 'self' parameter represent in a Python class method?",
      answer: "C. A reference to the instance of the class",
      options: [
        "A. The name of the class",
        "B. The main function",
        "C. A reference to the instance of the class",
        "D. The return value of the method",
      ],
    },
    {
      numb: 4,
      question: "How do you create a list in Python?",
      answer: "B. my_list = [1, 2, 3]",
      options: [
        "A. my_list = (1, 2, 3)",
        "B. my_list = [1, 2, 3]",
        "C. my_list = {1, 2, 3}",
        "D. array(1, 2, 3)",
      ],
    },
    {
      numb: 5,
      question: "Which of the following is used to import a module in Python?",
      answer: "A. import module_name",
      options: [
        "A. import module_name",
        "B. include module_name",
        "C. using module_name",
        "D. require module_name",
      ],
    },
    {
      numb: 6,
      question: "What is the output of: print(3 * '7')?",
      answer: "D. '777'",
      options: ["A. 21", "B. 37", "C. Error", "D. '777'"],
    },
    {
      numb: 7,
      question:
        "Which Python library is commonly used for data analysis and manipulation?",
      answer: "C. pandas",
      options: ["A. matplotlib", "B. flask", "C. pandas", "D. django"],
    },
    {
      numb: 8,
      question: "What does the 'pip' command do in Python?",
      answer: "B. Installs packages",
      options: [
        "A. Creates virtual environments",
        "B. Installs packages",
        "C. Runs Python scripts",
        "D. Debugs code",
      ],
    },
    {
      numb: 9,
      question:
        "How do you open a file named 'example.txt' for reading in Python?",
      answer: "A. file = open('example.txt', 'r')",
      options: [
        "A. file = open('example.txt', 'r')",
        "B. file = read('example.txt')",
        "C. file = file.open('example.txt')",
        "D. file = open('r', 'example.txt')",
      ],
    },
    {
      numb: 10,
      question: "What is the purpose of the __init__ method in Python?",
      answer: "C. It's a constructor method",
      options: [
        "A. To initialize the Python interpreter",
        "B. To finalize and destroy an object",
        "C. It's a constructor method",
        "D. To import modules",
      ],
    },
  ],

  // HTML Quiz
html: [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "C. Hyper Text Markup Language",
    options: [
      "A. Hyper Type Multi Language",
      "B. Hyper Text Multiple Language",
      "C. Hyper Text Markup Language",
      "D. Home Text Multi Language",
    ],
  },
  {
    numb: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    answer: "B. <a>",
    options: [
      "A. &lt;link&gt;",
      "B. &lt;a&gt;",
      "C. &lt;href&gt;",
      "D. &lt;url&gt;",
    ],
  },
  {
    numb: 3,
    question: "Which HTML tag is used to define an internal style sheet?",
    answer: "A. <style>",
    options: [
      "A. &lt;style&gt;",
      "B. &lt;css&gt;",
      "C. &lt;script&gt;",
      "D. &lt;link&gt;",
    ],
  },
  {
    numb: 4,
    question: "What is the correct HTML for creating a checkbox?",
    answer: "D. <input type='checkbox'>",
    options: [
      "A. &lt;checkbox&gt;",
      "B. &lt;input type='check'&gt;",
      "C. &lt;check&gt;",
      "D. &lt;input type='checkbox'&gt;",
    ],
  },
  {
    numb: 5,
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answer: "B. alt",
    options: ["A. title", "B. alt", "C. src", "D. description"],
  },
  {
    numb: 6,
    question: "What is the correct HTML for making a drop-down list?",
    answer: "C. <select>",
    options: [
      "A. &lt;input type='dropdown'&gt;",
      "B. &lt;list&gt;",
      "C. &lt;select&gt;",
      "D. &lt;dropdown&gt;",
    ],
  },
  {
    numb: 7,
    question: "Which doctype is correct for HTML5?",
    answer: "A. <!DOCTYPE html>",
    options: [
      "A. &lt;!DOCTYPE html&gt;",
      "B. &lt;!DOCTYPE HTML5&gt;",
      "C. &lt;!DOCTYPE HTML PUBLIC&gt;",
      "D. &lt;!DOCTYPE&gt;",
    ],
  },
  {
    numb: 8,
    question: "What is the purpose of the <header> element in HTML5?",
    answer: "C. To specify a header for a document or section",
    options: [
      "A. To create a navigation menu",
      "B. To define a footer for a document or section",
      "C. To specify a header for a document or section",
      "D. To create a sidebar",
    ],
  },
  {
    numb: 9,
    question: "Which HTML element is used to define important text?",
    answer: "B. <strong>",
    options: [
      "A. &lt;important&gt;",
      "B. &lt;strong&gt;",
      "C. &lt;b&gt;",
      "D. &lt;imp&gt;",
    ],
  },
  {
    numb: 10,
    question: "What is the correct way to include an external JavaScript file?",
    answer: "C. <script src='script.js'>",
    options: [
      "A. &lt;script href='script.js'&gt;",
      "B. &lt;script name='script.js'&gt;",
      "C. &lt;script src='script.js'&gt;",
      "D. &lt;javascript src='script.js'&gt;",
    ],
  },
],



  // CSS Quiz
  css: [
    {
      numb: 1,
      question: "What does CSS stand for?",
      answer: "A. Cascading Style Sheet",
      options: [
        "A. Cascading Style Sheet",
        "B. Creative Style Sheet",
        "C. Computer Style Sheet",
        "D. Colorful Style Sheet",
      ],
    },
    {
      numb: 2,
      question:
        "Which CSS property is used to change the text color of an element?",
      answer: "C. color",
      options: ["A. text-color", "B. font-color", "C. color", "D. text-style"],
    },
    {
      numb: 3,
      question: "Which CSS property controls the text size?",
      answer: "B. font-size",
      options: [
        "A. text-size",
        "B. font-size",
        "C. text-style",
        "D. font-style",
      ],
    },
    {
      numb: 4,
      question: "How do you select an element with id 'demo'?",
      answer: "A. #demo",
      options: ["A. #demo", "B. .demo", "C. demo", "D. *demo"],
    },
    {
      numb: 5,
      question: "How do you select elements with class name 'test'?",
      answer: "B. .test",
      options: ["A. #test", "B. .test", "C. test", "D. *test"],
    },
    {
      numb: 6,
      question: "What is the default value of the position property?",
      answer: "C. static",
      options: ["A. relative", "B. fixed", "C. static", "D. absolute"],
    },
    {
      numb: 7,
      question:
        "Which CSS property is used to control the spacing between elements?",
      answer: "D. margin",
      options: ["A. spacing", "B. padding", "C. border", "D. margin"],
    },
    {
      numb: 8,
      question: "Which property is used to change the font of an element?",
      answer: "A. font-family",
      options: [
        "A. font-family",
        "B. font-style",
        "C. font-type",
        "D. font-weight",
      ],
    },
    {
      numb: 9,
      question: "How do you make a list without bullets?",
      answer: "D. list-style-type: none",
      options: [
        "A. list-type: none",
        "B. list: none",
        "C. bulletpoints: none",
        "D. list-style-type: none",
      ],
    },
    {
      numb: 10,
      question: "Which CSS property is used to create a flexbox layout?",
      answer: "B. display: flex",
      options: [
        "A. display: flexbox",
        "B. display: flex",
        "C. flex: true",
        "D. flex-display: true",
      ],
    },
  ],

  // C++ Quiz
  cpp: [
    {
      numb: 1,
      question: "Who developed C++?",
      answer: "C. Bjarne Stroustrup",
      options: [
        "A. Dennis Ritchie",
        "B. James Gosling",
        "C. Bjarne Stroustrup",
        "D. Guido van Rossum",
      ],
    },
    {
      numb: 2,
      question:
        "Which of the following is the correct way to declare a variable in C++?",
      answer: "A. int x = 10;",
      options: [
        "A. int x = 10;",
        "B. x = 10;",
        "C. variable x = 10;",
        "D. int x := 10;",
      ],
    },
    {
      numb: 3,
      question: "What is the correct way to declare a pointer in C++?",
      answer: "B. int *ptr;",
      options: ["A. int ptr;", "B. int *ptr;", "C. ptr int;", "D. *int ptr;"],
    },
    {
      numb: 4,
      question: "What does 'cout' stand for in C++?",
      answer: "A. Console Output",
      options: [
        "A. Console Output",
        "B. Character Output",
        "C. Common Output",
        "D. Computer Output",
      ],
    },
    {
      numb: 5,
      question: "What keyword is used to define a class in C++?",
      answer: "B. class",
      options: ["A. struct", "B. class", "C. type", "D. object"],
    },
    {
      numb: 6,
      question: "Which operator is used for dynamic memory allocation in C++?",
      answer: "C. new",
      options: ["A. malloc", "B. alloc", "C. new", "D. create"],
    },
    {
      numb: 7,
      question: "What is the purpose of 'virtual' keyword in C++?",
      answer: "D. To create polymorphic functions",
      options: [
        "A. To create a virtual machine",
        "B. To make the class abstract",
        "C. To allocate memory",
        "D. To create polymorphic functions",
      ],
    },
    {
      numb: 8,
      question: "What is the correct file extension for C++ source files?",
      answer: "A. .cpp",
      options: ["A. .cpp", "B. .c", "C. .cplus", "D. .cplusplus"],
    },
    {
      numb: 9,
      question:
        "What is the C++ Standard Library container that implements a dynamic array?",
      answer: "C. vector",
      options: ["A. array", "B. list", "C. vector", "D. dynamic_array"],
    },
    {
      numb: 10,
      question: "What is a constructor in C++?",
      answer: "B. A special method that is called when an object is created",
      options: [
        "A. A method that destroys objects",
        "B. A special method that is called when an object is created",
        "C. A function that connects two classes",
        "D. A method that constructs arrays",
      ],
    },
  ],

  // Frontend Development Quiz
  frontend: [
    {
      numb: 1,
      question: "Which language is primarily used for web development?",
      answer: "C. JavaScript",
      options: ["A. C++", "B. Java", "C. JavaScript", "D. Python"],
    },
    {
      numb: 2,
      question: "Which keyword is used to declare a variable in JavaScript?",
      answer: "C. var, let, const",
      options: ["A. int", "B. string", "C. var, let, const", "D. declare"],
    },
    {
      numb: 3,
      question: "What does 'DOM' stand for in JavaScript?",
      answer: "B. Document Object Model",
      options: [
        "A. Data Object Model",
        "B. Document Object Model",
        "C. Document Oriented Module",
        "D. Digital Ordinance Model",
      ],
    },
    {
      numb: 4,
      question: "What is React.js?",
      answer: "A. A JavaScript library for building user interfaces",
      options: [
        "A. A JavaScript library for building user interfaces",
        "B. A programming language",
        "C. A database system",
        "D. A server framework",
      ],
    },
    {
      numb: 5,
      question: "What does API stand for?",
      answer: "C. Application Programming Interface",
      options: [
        "A. Application Process Integration",
        "B. Advanced Programming Interface",
        "C. Application Programming Interface",
        "D. Advanced Process Integration",
      ],
    },
    {
      numb: 6,
      question:
        "Which tool is used to convert modern JavaScript code to backward-compatible versions?",
      answer: "B. Babel",
      options: ["A. Webpack", "B. Babel", "C. NPM", "D. Node.js"],
    },
    {
      numb: 7,
      question: "What is the purpose of the 'alt' attribute in HTML images?",
      answer: "A. Provides alternative text if the image cannot be displayed",
      options: [
        "A. Provides alternative text if the image cannot be displayed",
        "B. Sets the image alignment",
        "C. Defines the alternative image source",
        "D. Determines the image transparency",
      ],
    },
    {
      numb: 8,
      question: "What does AJAX stand for?",
      answer: "D. Asynchronous JavaScript and XML",
      options: [
        "A. Advanced JavaScript and XML",
        "B. Automated JavaScript and XML",
        "C. Asynchronous Java and XML",
        "D. Asynchronous JavaScript and XML",
      ],
    },
    {
      numb: 9,
      question: "Which CSS property is used to make text bold?",
      answer: "B. font-weight",
      options: [
        "A. text-style",
        "B. font-weight",
        "C. text-decoration",
        "D. font-style",
      ],
    },
    {
      numb: 10,
      question: "What is the purpose of localStorage in web development?",
      answer: "C. To store data in a web browser with no expiration time",
      options: [
        "A. To store server credentials",
        "B. To improve website loading speed",
        "C. To store data in a web browser with no expiration time",
        "D. To secure website connections",
      ],
    },
   
  ],
};

// Default category is programming fundamentals
let currentCategory = "fundamentals";
let questions = [...allQuizData[currentCategory]];

// Function to load questions for a specific category
function loadQuizByCategory(category) {
  if (allQuizData[category]) {
    currentCategory = category;
    questions = [...allQuizData[category]];
    return true;
  }
  return false;
}
