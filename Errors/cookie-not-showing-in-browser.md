### Cookie works when I use Postman, but does not show in browser

**`reason:`** `httpOnly` cookies are set by the server and arent accessible by the browser, only the server. When making your request try adding `withCredentials: true` in an axios (or `credentials: 'include'` for fetch).

**FIX:**

```js
axios.post('/your-route', {your-body}, {withCredentials: true});
-- or --
fetch('/your-route', {credentials: 'include'})
//may need cross-origin or same-origin if CORS Origin is set
```

In My case:

```js
// frontend
const response = await fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  credentials: "include",
});

// Now if you encounter CORS Error

// Backend (index.js)
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));
```

<br>

Reference => [Link](https://stackoverflow.com/questions/69487582/cookie-works-when-i-use-postman-but-does-not-show-in-browser)

<br>

--- 📄 Document End 🎉 -----
