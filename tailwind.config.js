/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './dist/**/*.html',
    './src/input.css',
    './src/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'quito': "url('../src/img/quito-ec.jpg')",
        'machuPichu': "url('../src/img/peru.jpg')",
        'bogota': "url('../src/img/bogota-co.jpg')",
        'buenosAires': "url('../src/img/buenos-aires-ar.jpg')",
        'santiagoChile': "url('../src/img/santiago-chile.jpg')",
        'california': "url('../src/img/california-usa.jpg')",
        'hongKong': "url('../src/img/hong-kong-ch.jpg')",
        'venecia': "url('../src/img/italia.jpg')",
        'londres': "url('../src/img/londres-uk.jpg')",
        'madrid': "url('../src/img/madrid-es.jpg')",
        'mexico': "url('../src/img/mexico-city.jpg')",
        'paris': "url('../src/img/paris-fr.jpg')",
        'santorini': "url('../src/img/santorini-grecia.jpg')",
        'sidney': "url('../src/img/sidney-au.jpg')",
        'tokio': "url('../src/img/tokio-jp.jpg')",
        'roma': "url('../src/img/roma-it.jpg')",
        'romaDesktop': "url('../src/img/roma-desktop.jpg')",
        'romaRoom': "url('../src/img/roma-room.jpg')",
        'veneciaRoom': "url('../src/img/venecia-room.jpg')",
        'londresRoom': "url('../src/img/londres-room.jpg')",
        'mexicoRoom': "url('../src/img/mexico-room.jpg')",
        'quitoRoom': "url('../src/img/quito-room.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#32489b',
        'secondary': '#5486dd',
        'terciary': '#75a5e5',
      }),
      textColor: {
        'primary': '#32489b',
        'secondary': '#5486dd',
        'terciary': '#75a5e5',
      },
      fontFamily:{
        Monserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

