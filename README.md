# Music-Player-WEEK3
The week 3 task submission under Edunet Foundation in collaboration with EY GDS AND AICTE.

# Detailed Description of the task done under the music player website and also includes the improvisations(highlighted).

Week one task was to create two folders backend and frontend and to integrate them at the end. Development of the login and register functionality in my Spotify Clone project, the frontend uses React.js and Tailwind CSS to create responsive and visually appealing forms with proper validation. Backend development involves Express.js to set up RESTful APIs for handling user registration and login, with password encryption using bcrypt for security. Authentication is managed using JWT to ensure secure access control. MongoDB is utilized to store user credentials and related information. Additionally, the isAuth middleware ensures that only authenticated users can access protected routes, adding an extra layer of security.
1.**Toast notifications are implemented using a library like react-toastify to provide real-time feedback for user actions, such as successful login, registration, or error handling**.
2.**Cookies are used for secure storage of JSON Web Tokens (JWT) to manage user sessions. Upon successful login or registration, the server generates a token and sends it to the client, where it is stored as an HTTP-only cookie**.
3.**Axios is used to handle HTTP requests between the frontend and backend. During login or registration, Axios sends user credentials securely to the backend API**.

Task Details Week two task was to create a beautiful and functional UI for a Spotify clone music player website. The task involved designing pages that closely resembled the original Spotify interface while ensuring smooth navigation and an engaging user experience. The UI included a visually appealing layout with a side navigation pane that provided easy access to various sections such as Home, Playlists, Albums, and Songs. The navigation pane, inspired by Spotify’s design, added a professional touch and enhanced usability.

To manage the music data effectively, routes were added for seamless navigation between different sections. Users could view albums, playlists, and individual songs with the help of structured routes. Each album and playlist displayed relevant details, such as thumbnails and artist names, to provide a more immersive experience. The thumbnails were carefully designed to maintain consistency with the overall theme and design of the website, giving it an authentic and polished appearance.

The task also required integrating backend functionality to fetch and display music data. For this, I used Postman to test and **verify API endpoints that supported operations like fetching all albums, viewing a specific album, retrieving playlists, and displaying all songs**. These endpoints were crucial for ensuring the application could dynamically update and show the correct data in the UI. The interaction with Postman allowed for efficient debugging and validation of the API responses, ensuring that the application worked smoothly.

1.**The playlist view provided an overview of the available playlists, while the individual song view displayed the song details, including its thumbnail and artist name. The GUI was carefully crafted to ensure responsiveness and compatibility with various devices, providing an optimal user experience across different screen sizes.**
2.**Also provided the adjusment bar so that volume can be adjusted as user choice and also provided the portion for podcast where podcast can be scheduled as well as viewed**
3.**Provided the search functionality along with playlist add and delete option and also added loop**
4.**Provided the option of creating own playlist and deleting**

Overall in week 3 ensured all the feautures working properly , tested them and also handled the cookies, tested for the song creation, playlist addition, playing, deletion and also developed the loop structure for playlist and album songs.

# Summary of the project work done:
1.**Toast notifications are implemented using a library like react-toastify to provide real-time feedback for user actions, such as successful login, registration, or error handling**.
2.**Cookies are used for secure storage of JSON Web Tokens (JWT) to manage user sessions. Upon successful login or registration, the server generates a token and sends it to the client, where it is stored as an HTTP-only cookie**.
3.**Axios is used to handle HTTP requests between the frontend and backend. During login or registration, Axios sends user credentials securely to the backend API**.
4.**Verify API endpoints that supported operations like fetching all albums, viewing a specific album, retrieving playlists, and displaying all songs**
5.**The playlist view provided an overview of the available playlists, while the individual song view displayed the song details, including its thumbnail and artist name. The GUI was carefully crafted to ensure responsiveness and compatibility with various devices, providing an optimal user experience across different screen sizes.**
6.**Also provided the adjusment bar so that volume can be adjusted as user choice and also provided the portion for podcast where podcast can be scheduled as well as viewed**
7.**Provided the search functionality along with playlist add and delete option and also added loop**
8.**Provided the option of creating own playlist and deleting**

