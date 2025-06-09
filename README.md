# Group 1 TCSS 460 Frontend
**Link**: https://group1-tcss460-front-end.vercel.app/
**Group 7 API**: https://group7-tcss460-web-api-6a6786271b27.herokuapp.com/
**Group 7 Docs**: https://ahwang5.github.io/TCSS-460-Web-API/

### Alpha Sprint Contribution
- Gage: N/A
- Noah: Set up repo, hosted on Vercel
- Ian: N/A
- Christian: N/A

### Alpha Sprint Meetings
Opted to skip Monday meeting as there wasn't much of anything to talk about. The usual communication otherwise.

### Alpha Sprint Comments
N/A

### Beta I Sprint Contribution
- Gage: Alongside Christian, worked on mock book data and pages/views for a single book and a list of books.
- Noah: Alongside Ian, worked on modifying the register/login forms and making change password form.
- Ian: Alongside Noah, worked on modifying the register/login forms and making change password form.
- Christian: Alongside Gage, worked on mock book data and pages/views for a single book and a list of books.

### Beta I Sprint Meetings
Regular text communication over discord, as well as 1 on 1 meetings on discord for pair programming. the all-group meetings were a little lacking, but not really to the detriment of our work. Discussed division of responsibilities and pair programming.

### Beta I Sprint Comments
Clicking on a book in the 'view multiple books' view gives you a 404 instead of bringing you to the associated 'view single book' view for that book. This will be fixed very soon. Also we ran into a Vercel issue when deploying. Something to do with yarn failing to build when it would modify yarn.lock. If memory serves, installing yarn with npm and then running yarn install fixed the error. It was pretty simple, even if my recollection is wrong. Other than that, no real issues or comments. I (Noah) suspect things will begin to make even more sense and fall into place on the frontend side beginning next week.

### Beta II Sprint Contribution
- Gage: Mock data updates, book context handling, book page/list views, update rating UI.
- Noah: Change password functionality, general troubleshooting. 
- Ian: Create book form, UI for deleting a book.
- Christian: Mock data updates, search by ISBN/Author/Year/Rating/Title UI + functionality.

### Beta II Sprint Meetings
The usual text + voice communication (3x) over discord, as well as the in person meeting in lieu of lecture on May 29. 

### Beta II Sprint Comments
Ran into a problem with the Axios request interceptor causing an error because it was trying to read the window variable, that one was difficult to track down, combined with general troubleshooting for different errors trying to implement the change password functionality. Also issues with Group 7's documentation or lack thereof (no hard feelings, of course). Lot of errors slowed development considerably but I'm happy to report we meet all the requirements for this sprint.

Update ratings is not fully finished yet due to the backend API requiring the message body to have a book id. Sent in a ticket to let group 7 know about the issue.

### Final Sprint Contribution
- Gage: N/A
- Noah: Centered search results, removed duplicate footer from create book form
- Ian: N/A
- Christian: N/A

### Final Sprint Meetings
One voice meeting over Discord to discuss final plans, but the usual text communication otherwise.

### Final Sprint Comments
Functionality for delete book and update ratings are not complete, but authentication, search pages and viewing books via clicking on the entry works as intended.
