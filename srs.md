## SOFTWARE REQUIREMENT SPECIFICATIONS of DBMS project on ASSB
> Automation of Sports Slot Booking System four our insititute IIITDM
### Database name: SPORTS_SECTION
> We have "sports department" in our institute. Under sports department we have 'several sports'.<br>
> There are 'two' categories of sports, they are "outdoor" and "indoor".<br>
> To play 'indoor games', one has to book slots. In indoor sports there are 'Gym', 'Badminton', 'Carrom', 'Chess', 'Table tennis'.<br>
> Slot timings are divided into 'two' groups. There are "morning" and "evening":<br>
  at 'morning' we have 'four' slots, they are '5-6 am', '6-7 am', '7-8 am' and '8-9 am',<br>
  at 'evening' we have 'five' slots, they are '5-6 pm', '6-7 pm', '7-8 pm', '8-9 pm' and '9-10 pm'.<br>
'Gym' can accomodate a maximum of 'fifty' people.<br>
'Badminton' arena have 'four' courts, where each can accomodate a maximum of 'six' people.<br>
'Carrom' arena have 'four' boards, where each can accomodate a maximum of 'four' people.<br>
'Chess' arena have 'eight' boards, where each can accomodate a maximum of 'two' people.<br>
'Table tennis' arena have 'four' tables, where each can accomodate a maximum of 'four' people.<br>
### Database name: PEOPLE
Sports are played by different set of people, these are 'Student', 'Faculty', 'Faculty Dependent', 'Staff' and 'Staff Dependent'.<br>
Each 'Student':<br>
  is enrolled for a particular 'Degree', 'Department' and 'Specialization',<br>
  is studying in a 'year' and a 'sem',<br>
  has a unique ID called 'roll number',<br>
  has 'First name', 'Last name', 'Sex', 'Age'.<br> 
Each 'Faculty':<br>
  belongs to a particular 'Department',<br>
  has a unique 'ID',<br>
  has a 'First name', 'Last name', 'Sex', 'Age'.<br>
'Faculty dependents' belong to particular Faculty. Faculty dependents cannot belong to 'two or more' faculties. Faculty dependents have 'First name', 'Last name', 'Age', 'Sex' and 'Relationship'.<br>
Each staff:<br>
  belongs to a particular 'Department',<br>
  has a unique 'ID',<br>
  has a 'First name', 'Last name', 'Age', 'Sex'.<br>
'Staff dependents' belong to particular Staff. Staff dependents cannot belong to 'two or more' staffs. Staff dependents have 'First name', 'Last name', 'Age', 'Sex' and 'Relationship'.<br>
Each 'Student', 'Faculty', 'Faculty dependent', 'Staff' or 'Staff dependent':<br>
  can play multiple sports, for each sport he/she can select 'only one slot'.<br>
  will have a "registration date" and "end date", where "end date" can be 'end of semester', 'end of month' or 'end of week'.<br>
