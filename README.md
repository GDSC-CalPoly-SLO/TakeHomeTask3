# TakeHomeTask3
In this task we will render content to a page to start building our task app. You will learn how to use the "useState" hook

# This task will be a step by step task since this topic is hard to learn

## Step 1

    Download NPM from the internet

## Step 2

    Open a new terminal window and navigate to TakeHomeTask3

## Step 3

    In the terminal enter this command "npx create-react-app take-home-task-three"
    This will start this cool process of creating a "create-react-app" application 
    Once it is done continue

## Step 4

    Now you have a new folder called take-home-task-three
    Open it
    You'll be greeted by a plethora of files 
    Find the README.MD file and take a look at it to familiarize yourself with some commands you'll need later.

## Step 5

    Navigate to take-home-task-three in your terminal by saying "cd take-home-task-three"
    Then run "npm start"
        LATER: to turn off this live serve go back to the terminal and press ctrl+c
    This is going to start a local development server that your React App will be displayed in
    It will take you to a browser
    Also go to the developer console and take a look at the structure of the HTML in the source code
    Once done here it's time to start implementing

## Step 6

    Delete all the content from the "index.css" and "app.css"
    Save the files and navigate back to the browser page
    The website is now ugly
    This is how development works, you modify your code, save changes, and look at the output
    Delete the "setupTests.js" and "app.test.js" files
    Inside the App.js file, delete everything inside of the parent div
    You should be left with an empty div with the className attribute "App"

## Step 7

    Inside of the 'src' directory create a new folder called "components"
    Inside "components" create a directory called "Task"
    Inside "Task" create two files called "Task.jsx" and "Task.css"
    Inside Task.jsx, import Task.css as follows: "import "./Task.css";"
    Create a function that is exported by default called "Task"
    As a parameter to this function pass in "{taskName, taskDescription}"
    Have the function return a div with a h1 tag and a p tag
    Inside the h1 element put taskName into it. As follows, "<h1>{taskName}<h1>"
    Do the same for the p element
    Style it however you would like in the Task.css file.
    Remember that in react "class" becomes "className"

## Step 8

    Inside the App.js file
    Create a new object with title and paragraph keys. Have the data be strings of whatever you want.
    These will be your sample title and paragraph data
    Import the Task Component
    Place your new Task component inside the HTML
    Be sure to set the taskName and taskDescription attributes to your object title and paragraph
    It should look something like this 
    <Task taskName={myObject.title} taskDescription={myObject.description}/>
    Save the file and assuming everything went okay you should see your Task object rendered on the page. 

## Step 9

    This is where things will start to be challenging because I am going to let go of your hand so that you can implement some cool stuff.

    To complete this do the following tasks 
    1. Render 3 unique tasks on the webpage
        Do this by having 3 Task Compnents that you created manually
    2. In a new directory called autoTasks create a component that uses the "useState" hook to render 3 unique tasks inside a separate container.
        To do this task you should create an array of objects with titles and paragraphs. 
        Loop through it to create an array of Task components
        Set the state of your task list to be your array of Task Components. 

        const[arrayOfTasks, setArrayOfTasks] = useState([])

        objectArray = [
            {title:"example", paragraph:"example paragraph"}, {title:"nextExample", paragraph: "nextParagraph"}
        ]

        TaskArray = [];

        objectArray.map((task) => {
            TaskArray.push(
                <Task ...>
            )
        })

        setArrayOfTasks(TaskArray)

        //somewhere in your html
        <div>{arrayOfTasks}</div>

        This is how i would loop through and create task components

    Doing both of these methods will show you the power of State in React

    Extra:
        If you want to go above and beyond, find out where you should use the useEffect hook to have the page be rendered efficiently

## Step 10
    
    Commit and push your changes to github