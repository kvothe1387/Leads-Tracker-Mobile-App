# Leads Tracker

A simple, lightweight web application for saving and managing website URLs. Perfect for sales representatives, recruiters, or anyone who needs to keep track of important web links.

## Deployment 

Deployed at leads-tracker-app-mccullough.netlify.app[https://leads-tracker-app-mccullough.netlify.app/]

## Features

- Save website URLs with a single click
- View all saved leads in a clean, organized list
- Open saved links in a new tab
- Delete all leads with a double-click
- Real-time data synchronization with Firebase
- Mobile-responsive design

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase Realtime Database

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/leads-tracker.git
   cd leads-tracker
   ```

2. Open `index.html` in your browser to use the application locally.

3. For production use, deploy to your preferred web hosting service.

## Firebase Setup

This application uses Firebase Realtime Database. To connect it to your own Firebase instance:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Create a Realtime Database
3. Update the `firebaseConfig` object in `index.js` with your own Firebase configuration:

```javascript
const firebaseConfig = {
  databaseURL: "YOUR_DATABASE_URL"
}
```

## Usage

1. Enter a URL in the input field
2. Click "SAVE INPUT" to add it to your leads list
3. Click on any saved lead to open it in a new tab
4. Double-click "DELETE ALL" to remove all saved leads

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

David McCullough

---

Feel free to contribute to this project by creating pull requests or reporting issues.