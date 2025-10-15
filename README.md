# lab-2
Lab 2 — React Tutorial: Building SLU-stagram

Live website: https://denise-soriano-mini-insta.netlify.app/

Screenshot 1:
http://localhost:5173/ initial build
<img width="3456" height="2160" alt="Screenshot 2025-10-14 214845" src="https://github.com/user-attachments/assets/e76f1573-aab1-4ad2-960f-1110bc4a82fc" />


CHECKPOINT — AFTER PART 3 (pg. 10)

Screenshots 2 and 3:
"The app with at least two posts visible; one liked and one not liked (hearts and counts visible)"
<img width="3455" height="2159" alt="Screenshot 2025-10-15 011301" src="https://github.com/user-attachments/assets/0924c182-1f78-444d-8b20-fe0fc136f551" />
<img width="3455" height="2157" alt="Screenshot 2025-10-15 011312" src="https://github.com/user-attachments/assets/ac104a11-378c-4e0a-bc90-754458d68026" />

Screenshot 4:
"The browser console panel open with no errors/warnings."
<img width="3455" height="2159" alt="Screenshot 2025-10-15 011326" src="https://github.com/user-attachments/assets/c9ac7edf-d55e-4d87-93d2-d56329d53472" />


CHECKPOINT — BEFORE PART 5 (pg. 17)

Screenshot 5:
"one not liked"
<img width="3455" height="2159" alt="Screenshot 2025-10-15 012136" src="https://github.com/user-attachments/assets/dca8a0d7-7e50-484a-a747-8ee1e84dc1dc" />


Screenshot 6:
"one post liked (heart filled and count increased)"
"one post with a newly added comment visible"
<img width="3455" height="2159" alt="Screenshot 2025-10-15 012131" src="https://github.com/user-attachments/assets/7bc7d189-d209-42c2-994f-2a85455962ee" />

Screenshot 7:
"the browser console open with no errors"
<img width="3453" height="2159" alt="Screenshot 2025-10-15 012151" src="https://github.com/user-attachments/assets/fd05ecfc-359a-4ea8-9016-8d1074b6e40e" />


DELIVERABLE EVIDENCE (pg. 26)

Screenshot A:
"The app showing the centered layout (visible margins), with the browser DevTools Styles panel open highlighting:

• body’s font-family stack including system-ui,

• the .container rules applied to <main>."
<img width="3447" height="2159" alt="Screenshot 2025-10-15 022340" src="https://github.com/user-attachments/assets/ac9f566b-c29f-43d6-ace0-c4044fd12539" />

Screenshot B:
"A hovered button (e.g., Like) demonstrating the hover style difference."
<img width="3455" height="2159" alt="Screenshot 2025-10-15 022449" src="https://github.com/user-attachments/assets/9fe5a42f-b489-4e23-9121-d55c03516ef0" />

Screenshot C:
"DevTools Elements view of:

• a Like <button> with aria-pressed="true" (after clicking),

• a post image’s img with a meaningful alt attribute."
<img width="3447" height="2159" alt="image" src="https://github.com/user-attachments/assets/4df042e6-d562-415b-852a-48a306f3ec42" />

COMPONENT TREE
* `App`
    * `Navbar`
    * `Composer`
    * `Feed`
        * `PostCard`
            * `CommentList`
            * `CommentForm`

WHERE STATE LIVES 

Post data is stored as state in the main App.jsx file. Then this data is passed  to child components to be displayed and updated.
