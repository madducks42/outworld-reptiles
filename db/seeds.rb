# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Collection.destroy_all

# BCI's
snake_1 = Collection.create(name: 'Boo', image: 'https://outworld-reptiles-production.s3.amazonaws.com/boo_1.jpg', title: '2013 Ghost Het Albino', description: 'Paired with Olasard for the 2021/2022 season.', sex: 'female', category: 'bci')

snake_2 = Collection.create(name: 'Lasciel', image: 'https://outworld-reptiles-production.s3.amazonaws.com/lasciel_1.jpg', title: '2013 Salmon Hypo Jungle', description: 'Paired with Grimes for the 2021/2022 season.', sex: 'female', category: 'bci')

snake_3 = Collection.create(name: 'Nyssa al Ghul', image: 'https://outworld-reptiles-production.s3.amazonaws.com/nyssa_1.jpg', title: '2015 Jungle Arabesque', description: 'Skipping the 2021/2022 season.', sex: 'female', category: 'bci')

snake_4 = Collection.create(name: 'Hecate', image: 'https://outworld-reptiles-production.s3.amazonaws.com/hecate_1.jpg', title: '2020 Triple Pastel Hypo Jungle Arabesque het Kahl Albino', description: "Skipping 2021/2022 breeding season.", sex: 'female', category: 'bci')

snake_5 = Collection.create(name: 'Artemis', image: 'https://outworld-reptiles-production.s3.amazonaws.com/artemis_1.jpg', title: '2014 Aby Hypo', description: 'Paired with Aspid for the 2021/2022 season.', sex: 'female', category: 'bci')

snake_6 = Collection.create(name: 'Freyja', image: 'https://outworld-reptiles-production.s3.amazonaws.com/freyja_1.jpg', title: '2020 Super Ghost Parahet', description: 'Skipping 2021/2022 breeding season.', sex: 'female', category: 'bci')

snake_7 = Collection.create(name: 'Mimir', image: 'https://outworld-reptiles-production.s3.amazonaws.com/mimir_1.jpg', title: '2020 Paradigm', description: 'Skipping 2021/2022 breeding season.', sex: 'male', category: 'bci')

snake_8 = Collection.create(name: 'Ferrovax', image: 'https://outworld-reptiles-production.s3.amazonaws.com/ferrovax_1.jpg', title: '2014 European Pastel Hypo', description: 'Skipping 2021/2022 breeding season.', sex: 'male', category: 'bci')

snake_9 = Collection.create(name: 'Grimes', image: 'https://outworld-reptiles-production.s3.amazonaws.com/grimes_1.jpg', title: '2013 Hypo Motley Het Albino', description: 'Paired with Lasciel for the 2021/2022 season.', sex: 'male', category: 'bci')

snake_10 = Collection.create(name: 'Olasard', image: 'https://outworld-reptiles-production.s3.amazonaws.com/olasard_1.jpg',title: '2015 Hypo Jungle Motley het Albino', description: 'Paired with Boo for the 2021/2022 season.', sex: 'male', category: 'bci')

snake_24 = Collection.create(name: 'Aspid', image: 'https://outworld-reptiles-production.s3.amazonaws.com/aspid_1.jpg',title: '2017 Anery het Albino', description: 'Paired with Artemis for the 2021/2022 season.', sex: 'male', category: 'bci')

# Blood Boas
snake_11 = Collection.create(name: 'Buffy', image: 'https://outworld-reptiles-production.s3.amazonaws.com/buffy_1.jpg',title: '2014 El Salvador Blood Boa', description: 'Paired with Spike for the 2021/2022 season.', sex: 'female', category: 'blood')

snake_12 = Collection.create(name: 'Spike', image: 'https://outworld-reptiles-production.s3.amazonaws.com/spike_1.jpg',title: '2014 El Salvador Blood Boa', description: 'Paired with Buffy for the 2021/2022 season.', sex: 'male', category: 'blood')

snake_13 = Collection.create(name: 'Faith', image: 'https://outworld-reptiles-production.s3.amazonaws.com/faith_1.jpg',title: '2014 DH Blood/Albino', description: 'Paired with Angel for the 2021/2022 season.', sex: 'female', category: 'blood')

snake_14 = Collection.create(name: 'Angel', image: 'https://outworld-reptiles-production.s3.amazonaws.com/angel_1.jpg',title: '2014 DH Blood/Albino', description: 'Paired with Faith for the 2021/2022 season.', sex: 'male', category: 'blood')

snake_15 = Collection.create(name: 'Darla', image: 'https://outworld-reptiles-production.s3.amazonaws.com/darla_1.jpg',title: '2018 Hypo DH Blood/Albino', description: 'Skipping 2021/2022 breeding season.', sex: 'female', category: 'blood')

snake_25 = Collection.create(name: 'Lenore', image: 'https://outworld-reptiles-production.s3.amazonaws.com/lenore_1.jpg',title: '2020 Hypo het Blood/Albino', description: 'Skipping the 2021/2022 season', sex: 'female', category: 'blood')

snake_26 = Collection.create(name: 'Drusilla', image: 'https://outworld-reptiles-production.s3.amazonaws.com/drusilla_1.jpg',title: '2019 Jungle het Blood/Anery', description: 'Skipping the 2021/2022 season', sex: 'female', category: 'blood')

snake_27 = Collection.create(name: 'Alucard', image: 'https://outworld-reptiles-production.s3.amazonaws.com/alucard_1.jpg',title: '2020 Jungle Albino het Blood', description: 'Skipping the 2021/2022 season', sex: 'male', category: 'blood')

snake_28 = Collection.create(name: 'Belmont', image: 'https://outworld-reptiles-production.s3.amazonaws.com/belmont_1.jpg',title: '2020 Jungle het Albino/Blood', description: 'Skipping the 2021/2022 season', sex: 'male', category: 'blood')

# Argentine Boas
snake_16 = Collection.create(name: 'Kitana', image: 'https://outworld-reptiles-production.s3.amazonaws.com/kitana_1.jpg',title: '2014 Maxx Pink Argentine', description: 'Hopefully gravid and expecting a litter in Sept 2021!', sex: 'female', category: 'bco')

snake_17 = Collection.create(name: 'Jax', image: 'https://outworld-reptiles-production.s3.amazonaws.com/jax_1.jpg',title: '2013 Argentine', description: 'Skipping the 2021/2022 season.', sex: 'male', category: 'bco')

# Misc
snake_18 = Collection.create(name: 'Morticia', image: 'https://outworld-reptiles-production.s3.amazonaws.com/morticia_1.jpg',title: '2010 Dumerils Boa', description: 'Typical calm natured Dumeril; awesome first time pets!', sex: 'female', category: 'misc')

snake_19 = Collection.create(name: 'Belia', image: 'https://outworld-reptiles-production.s3.amazonaws.com/belia_1.jpg',title: '2012 Blood Python', description: 'My oddly sweet tempered Blood Python.', sex: 'female', category: 'misc')

snake_20 = Collection.create(name: 'Newt', image: 'https://outworld-reptiles-production.s3.amazonaws.com/newt_1.jpg',title: '2008 Ball Python', description: 'Typical pet rock. I adore her.', sex: 'female', category: 'misc')

snake_21 = Collection.create(name: 'Saxony', image: 'https://outworld-reptiles-production.s3.amazonaws.com/saxony_1.jpg',title: '2010 Jungle Carpet Python', description: "A little snippy but he's so pretty.", sex: 'male', category: 'misc')

snake_23 = Collection.create(name: 'Fluffy', image: 'https://outworld-reptiles-production.s3.amazonaws.com/fluffy_1.jpg',title: '2009 Brazilian Rainbow Boa', description: "Brazilian Rainbow Boa's will always be one of my favorites.", sex: 'male', category: 'misc')