## SOFTWARE REQUIREMENT SPECIFICATIONS of DBMS project on ASSB
> Automation of Sports Slot Booking System four our insititute IIITDM
### Database name: SPORTS_SECTION
We have "sports department" in our institute. Under sports department we have 'several sports'.
There are 'two' categories of sports, they are "outdoor" and "indoor".
To play 'indoor games', one has to book slots. In indoor sports there are 'Gym', 'Badminton', 'Carrom', 'Chess', 'Table tennis'.
Slot timings are divided into 'two' groups. There are "morning" and "evening":
  at 'morning' we have 'four' slots, they are '5-6 am', '6-7 am', '7-8 am' and '8-9 am',
  at 'evening' we have 'five' slots, they are '5-6 pm', '6-7 pm', '7-8 pm', '8-9 pm' and '9-10 pm'. 
'Gym' can accomodate a maximum of 'fifty' people.
'Badminton' arena have 'four' courts, where each can accomodate a maximum of 'six' people.
'Carrom' arena have 'four' boards, where each can accomodate a maximum of 'four' people.
'Chess' arena have 'eight' boards, where each can accomodate a maximum of 'two' people.
'Table tennis' arena have 'four' tables, where each can accomodate a maximum of 'four' people.
### Database name: PEOPLE
Sports are played by different set of people, these are 'Students', 'Faculties', 'Faculty Dependents', 'Staff' and 'Staff Dependents'.
Each student:
  is enrolled for a 'Degree' and a 'Department',
  is studying in a 'year' and a 'sem',
  has a unique ID called 'roll number',
  has 'First name', 'Last name', 'Sex', 'Age',
  can play multiple sports, for each sport he/she can select 'only one slot'. 

Each slot chosen by the student, faculty or staff will have a "registration date" and "end date", where "end date" can be 'end of semester', 'end of month' or 'end of week'.
