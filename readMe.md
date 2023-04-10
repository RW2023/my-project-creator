# ***Project Creator***

This script automates the process of creating a new project folder with a predefined folder structure. It creates the necessary directories and files for a basic web development project. You can easily customize the script to match your preferred folder structure.

## Purpose

The primary purpose of this script is to save time and effort when setting up a new project. Instead of manually creating each folder and file, you can run this script to generate the project structure automatically.

## Usage

1. Ensure you have Node.js installed on your system. If not, download and install it from the official website: https://nodejs.org/
2. Download or clone this repository to your local machine.
3. Open your terminal/command prompt and navigate to the directory where the `project.js` script is located.
4. Run the script using the following command:

```
node project.js [project_name]
```

Replace `[project_name]` with the desired name for your project folder. If no project name is provided, the script will create a folder named "New Project".

For example:

```
node project.js my-awesome-project
```

This will create a new folder named "my-awesome-project" with the following structure:

```
my-awesome-project/
│   index.html
│
└───src/
    ├───css/
    │       styles.css
    │
    ├───img/
    │
    └───js/
            app.js
```

1. Start building your project by adding your HTML, CSS, and JavaScript code to the respective files.

## Customization

You can customize the folder structure and files created by this script by editing the `project.js` file. Simply add or remove `fs.mkdirSync()` and `fs.writeFileSync()` function calls as needed to create the desired directories and files.

Feel free to contribute to this project or submit suggestions for improvements.