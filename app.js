// app.js (CommonJS)
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Handlebars view engine ---
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',         // views/layouts/main.hbs
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: {
    year: () => new Date().getFullYear(),
    pretty: (filename) => {
      // "short-stories.pdf" -> "Short Stories"
      const base = filename.replace(/\.pdf$/i, '');
      return base
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
    },
    encode: (s) => encodeURIComponent(s)
  }
}));
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// --- Static files ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes ---
app.get('/', (req, res) => {
  res.render('index', { title: 'Home | My HBS Site' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About | My HBS Site' });
});

// --- Start ---
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
// --- New pages ---
app.get('/writings', (req, res) => {
  res.render('writings', { title: 'All Writings | readPIUSOLOFU' });
});

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  background: #fff8ee;          /* soft highlight */
  border-color: #d9a86c;        /* warm accent border */
}
