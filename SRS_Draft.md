# SOFTWARE REQUIREMENT SPECIFICATIONS for Sports Slot Booking System (SSBS)

## 1. Introduction<br>
The Sports Slot Booking System (SSBS) aims to automate the process of reserving slots for indoor sports activities offered by the sports department at IIITDM. This document outlines the requirements for the development of ASSB to facilitate efficient management of sports facilities and streamline the booking process for students, faculty, and staff.

## 2. Purpose <br>
The purpose of SSBS is to make booking slots for indoor sports activities like Gym, Badminton, Carrom, Chess, and Table Tennis easier with an online platform. It aims to ensure that users can book their preferred slots conveniently, maximizing the use of sports facilities. ASSB strives to simplify the booking process, reduce scheduling conflicts, and enhance the overall experience of users engaging in indoor sports. By providing a straightforward and user-friendly solution, SSBS aims to promote active participation in sports activities and contribute to the well-being of the IIITDM community.

## 3. Scope<br>
SSBS will include functionalities for managing slot bookings for indoor sports activities offered by the sports department. It will cater to students, faculty, and staff members of IIITDM. The system will allow users to view available slots, book slots for desired sports activities, and manage their bookings within specified timeframes.

## 4. Functional Requirements<br>
User Authentication and Profile Management:<br>
a. Implement authentication mechanism using institute-provided email IDs for students, faculty, and staff.<br>
b. Verify user identity by cross-referencing entered ID with the respective tables or databases for students, faculty, and staff.<br>
c. Upon first login, prompt users to provide additional details such as gender and full name.<br>
d. Restrict users from modifying their gender and name after initial setup.<br>
e. Allow users to update contact details such as phone number and address.<br>
f. Ensure data integrity by validating and sanitizing user inputs to prevent unauthorized access or tampering.<br>

Sports Management:<br>
a. Define and maintain a list of available sports activities categorized as indoor or outdoor.<br>
b. Specify maximum capacity and other relevant details for each sport activity.<br>
c. Provide an intuitive interface for administrators to add, edit, or remove sports activities as needed.<br>

Slot Booking:<br>
a. Display a unified interface for booking slots across all sports activities.<br>
b. Allow users to select their desired sport and available slot.<br>
c. Restrict users to booking only one slot per sport activity at a time.<br>
d. Implement real-time validation to prevent double booking and ensure slot availability.<br>
e. Provide confirmation messages upon successful booking and display booked slots in user profiles.<br>

Dependency Management:<br>
a. Enable faculty members to register their dependents for SSBS using their institute-provided email IDs.<br>
b. Associate each dependent with the respective faculty member upon registration.<br>
c. Implement checks to ensure that dependents are not registered under multiple faculty members simultaneously.<br>

Registration Period Management:<br>
a. Record registration start and end dates for each user account.<br>
b. Define end dates based on specific time intervals such as end of semester, month, or week.<br>
c.Upon the expiration of a subscription period, individuals who previously subscribed to a particular slot will no longer have access to that slot unless they renew their subscription by booking again. This ensures that access to slots is regulated according to active subscriptions, promoting fairness and efficient utilization of sports facilities.<br>
d. Notify users about upcoming registration periods and slot expiration dates.<br>

Reporting and Analytics:<br>
a. Generate reports on user demographics, sports facility utilization, and booking trends.<br>
b. Provide insights into popular sports activities, peak booking times, and user participation rates.<br>
c. Allow administrators to export reports in various formats for analysis and decision-making purposes.<br>

## 5. Non-Functional Requirements<br>
a. Performance:
i. Ensure the system can handle concurrent user access and booking requests without performance degradation.
ii. Response times for slot availability and booking operations should be within acceptable limits.

b. Scalability:
i. Design the system to accommodate increasing numbers of users and booking requests over time.
ii. Ensure scalability of database to manage large volumes of user data and booking records.

c. Security:
i. Implement authentication mechanisms to verify user identities during login.
ii. Encrypt sensitive user data such as personal information to maintain confidentiality.
iii. Apply access controls to restrict unauthorized access to booking functionalities.

d. Usability:
i. Design an intuitive user interface with clear navigation and booking instructions.
ii. Get informative feedback messages to enhance user experience.

This SRS document outlines the functional and non-functional requirements for the development of SSBS, ensuring that the system meets the needs of users efficiently and effectively.
