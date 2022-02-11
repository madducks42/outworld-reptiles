# Outworld Reptiles

Outworld Reptiles is a simple app that displays information about the owners of Outworld Reptiles and the reptiles in their collection. When they have reptiles for sale those are listed on the Available page.

The app was built with a Ruby on Rails backend with a PostgreSQL database. The front-end was built with React and styled with Bulma. This application also uses ActiveRecord and Images are stored in AWS S3 Cloud Storage.

[See the deployed application here](https://outworld-reptiles.herokuapp.com/)

## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)


## Run Locally
The setup steps expect the following tools/versions:
- Ruby 2.6.5
- Rails 5.2.4.4
- PostgreSQL 13

### Clone the Repo
```
git clone 
```

### Install Dependencies
```
npm install 
```
```
bundle install 
```

##Create and seed the database
```
bundle exec rake db: migrate
```
```
bundle exec rake db: seed
```

## Start the Rails server and webpack-dev-server
```
bundle exec rails s
npm run start
```

###### The application can be accessed locally at <http://localhost:3000>
