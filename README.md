# blog-vue
A minimalist blog website made with node js and Nuxt

## How to run this app 
### prerequisite
- Node js
- PostgreSQL
  
### Running server
```
> npm i
> npx sequelize-cli db:create
> npx sequelize-cli db:migrate
> npx sequelize-cli db:seed:all
> npm run start
```

### Running client
```
> npm i
> npm run dev
```