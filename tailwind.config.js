/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      myfont: ['MicrosoftYaHei', 'sans-serif'], // Define your font name here
    },
    
    extend: {
      backgroundImage: {
        'custom-image': "url('img/Asset/Asset 1MH.png')",
      },
      fontSize: {
        '42px': '40px',
        '55px': '55px',
      },
      spacing: {
        'p8':'8%',
        'p10':'10%',
        '45': '45%',
        '87': '87%',
        '58': '58%',
        'py-1.75': '6px',
      },
      colors: {
        'myblue': '#1c4441',
        'myorenge': '#eb806c',
        'mygray': '#F3EAE5',
        'mytblue': '#367368',
        'mylblue': '#F5F5F5',
        'mylgray': '#E0E0E0',
        'myyellow': '#FFB345',
      },
    },
  },
  plugins: [],
}