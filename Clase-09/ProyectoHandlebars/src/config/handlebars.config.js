import { create } from 'express-handlebars';

export const hbs = create({
//    extname: '.hbs',
//    defaultLayout: 'main'
    helpers: {
        json: function(context){
            return JSON.stringify(context);
        },
        includes: function (str, substring) {
          if (!str) {
            return false;
          }
          if (Array.isArray(str)) {
              return str.some(item => item.includes(substring));
          }
          return str.includes(substring);
        },
    }
})

export default hbs;