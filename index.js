// Import express module
const express = require("express");
// Import Node file system module with promises for asynchronous file operations
const fs = require("fs/promises");
// Import Cors to allow Cross-Origin Resource Sharing
const cors = require("cors");

// Create express application
const app = express();
// Define port number for server
const port = 3000;
// Define file path to JSON file that stores the course data
const coursesFile = "./courses.json";

// Asynchronously read data from JSON file, parse it and return result
async function readCourses() {
    try {
        const data = await fs.readFile(coursesFile);
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading courses file: ", err);
        // Return empty array in case of an error
        return [];
    }
}

// Asynchronously write data back to JSON file
async function writeCourses(allCourses) {
    try {
        // Convert course data to a JSON string with pretty formatting
        await fs.writeFile(coursesFile, JSON.stringify(allCourses, null, 2));
    } catch (err) {
        console.error("Error writing courses file: ", err);
    }
}

// Enable express to parse JSON request bodies
app.use(express.json());
// Enable CORS for all routes and origins
app.use(cors());

// Define route for GET requests to fetch all courses
app.get("/courses", async (req, res) => {
    try {
        // Read courses from file
        const courses = await readCourses();
        // Send data as JSON response
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Define route for GET requests to fetch a specific course by its id
app.get("/courses/:_id", async (req, res) => {
    try {
        // Read courses from file
        const courses = await readCourses();
        // Find specific course using ID from the request parameters
        const course = courses.find(course => course._id == req.params._id);

        if (course) {
            // Send found course as JSON response
            res.json(course);
        } else {
            // If course doesn't exist send 404 response
            res.status(404).send("Course not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Define a route for DELETE requests to delete a specific course by its id
app.delete("/courses/:_id", async (req, res) => {
    try {
        let courses = await readCourses();
        // Find specific course using ID from the request parameters
        const course = courses.find(course => course._id == req.params._id);
        // Find index of the course in the array
        const index = courses.indexOf(course);

        if (index !== -1) {
            // If course is found, remove from the array
            courses.splice(index, 1);
            // Write the updated courses data back to the file
            writeCourses(courses);
            // Send success message
            res.send(`Course with id ${req.params._id} deleted`);
        } else {
            res.status(404).send("Course not found");
        }
    } catch (err) {
        console.error(err);
        res.status(404).send("Course not found");
    }
});

// Start server and listen for incoming requests on the defined port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});