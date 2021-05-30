# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Collection.destroy_all

# BCI's
snake_1 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg', title: 'Type of Snake', description: 'Snake Description', sex: 'female', category: 'bci')

snake_2 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg', title: 'Type of Snake', description: 'Snake Description', sex: 'female', category: 'bci')

# Blood Boas
snake_3 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg',title: 'Type of Snake', description: 'Snake Description', sex: 'female', category: 'blood')

# Argentine Boas
snake_4 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg',title: 'Type of Snake', description: 'Snake Description', sex: 'female', category: 'bco')

snake_5 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg',title: 'Type of Snake', description: 'Snake Description', sex: 'male', category: 'bco')

# Misc
snake_6 = Collection.create(name: 'Snake Name', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg',title: 'Type of Snake', description: 'Snake Description', sex: 'female', category: 'misc')
