# Hook-up in North Sealand

![Hook-up in North Sealand logo](assets/images/hook-up-site-logo.PNG)

[View the live project here.](https://axel713.github.io/hook-up-in-north-sealand/)

Hook-up in North Sealand is a new project, directed primarly to foreigners living in Denmark or tourists who want to take part or begin to discover fishing in the country.

The overall goal is to give its audience a reconciliation of the basic necessary information which is most often scattered accross various danish sites.

As a new fisherman, I intend to also a give some field functionality that help users with following some of the exisiting rules.

## Content

-   [UX](#UX)
    -   [User Goals](#User-Goals)
    -   [User Stories](#User-Stories)
    -   [Site Owner Goals](#Site-Owner-Goals)
    -   [User Requirements and Expectations](#User-Requirements-and-Expectations)
    -   [Wireframes](#Wireframes)
    -   [Other-Design-Documents](#Other-Design-Documents)
    -   [Design Choices](#Design-Choices)
        -   [Colours](#Colours)
        -   [Fonts](#Fonts)
        -   [Wireframes](#Wireframes)
-   [Features](#Features)
    -   [Existing Features](#Existing-Features)
    -   [Future Features](#Future-Features)
-   [Technologies Used](#Technologies-Used)
-   [Testing](#Testing)
    -   [HMTL code validation](#HTML-code-validation)
    -   [CSS code validation](#CSS-code-validation)
    -   [Overall website test](#Overall-website-test)
    -   [Responsiveness](#Responsiveness)
    -   [Social media link](#Social-media-link)
    -   [Contact Form](#Contact-Form)
    -   [Bugs and fixes](#Bugs-and-fixes)
        -   [HMTL fixes](#HMTL-fixes)
        -   [CSS sixes](#CSS-fixes)
        -   [Miscellaneous fixes](#Miscellaneous-fixes)
-   [Deployment](#Deployment)
    -   [GitHub Pages](#GitHub-Pages)
    -   [Local deployment](#Local-deployment)
-   [Credits](#Credits)
    -   [Project Content](#Project-Content)
    -   [Media](#Media)
    -   [Acknowledgements](#Acknowledgements)

---

## **UX**

User profiles are expected to be very varied. Being mainly targeted to foreigners in Denmark and tourists, variations in culture, background, age range make it difficult to pinpoint a/some specific groups. Nonetheless, to fit the current scandinavic design trends and be easy to use (especially in the field) the new UX must be:

-   with a simple and clear layout.
-   with a colour theme blending sea, nature and the Danish location. It also must be "easy on the eye" especially during levels of low light conditons, since the best fishing times tend to be at dusk/dawn.

### **User Goals**

-   **Know where** I can find essential legal information for fishing in Denmark.
-   **Know where** I can purchase a fishing licence.
-   **Be aware** of environmental considerations.
-   **Find out** some examples of where I can go fishing.
-   **Know if** I can keep the fish that I catch.
-   **Access** social media.

### **User Stories**

-   As a user, I want to know where I can find essential legal information for fishing in Denmark.
-   As a user, I want to know where I can purchase a fishing licence.
-   As a user, I want to be aware of environmental considerations.
-   As a user, I want to find out where I can go fishing and where I can not.
-   As a user I want to know if I can keep the fish that I catch.
-   As a user, I want to access social medias.

### **Site Owner Goals**

-   As a site owner, I want to inform foreigners in Denmark and tourists of how about what they need to start fishing in Denmark.
-   As a site owner, I want users to know where they can access reference legal information.
-   As a site owner, I want users to have a link to a fishing licence purchase service.
-   As a site owner, I want users to be aware and keep in mind the environment when fishing.
-   As a site owner, I want users to know where they can go fishing and where they can not.
-   As a site owner, I want users to know if they can keep the fish that they catch.
-   As a site owner, I want users to access dedicated social media sites (when existing).

### **User Requirements and Expectations**

1. The site must have a navigation bar.
1. The site must include a brief explanation of how to use it.
1. The site must include a brief summary of requirements for fishing in Denmark.
1. The site must include a link to reference legal information.
1. The site must include some environmental considerations to make the user aware of the concept when fishing.
1. The site must include a map with some fishing location examples, as well as where it is not allowed to fish.
1. The site must include a tool to allow users to verify if they can keep the fish that they catch.
1. The site must include some social media links.

### **Design Choices**

The site must be pleasant to the eye whilst using effective colour contrasts to allow objects and sections to stand out from one another. Navigation text and buttons must be large enough to allow for an easy browsing experience at low-light levels.

#### **Colours**

The selection of colour is made to inspire a blending of: sea, nature and the Danish location. To make the content easy and pleasant to read, I chose a dedicated white (with gray notes) and black (with a blue flavour). The combination white/red is in reference to the danish flag; for ease-of-read, the white color is however on the gray side of the palette. Green is for nature, black with blue flavour is for the sea.
![Colour palette](design-tools/colour-palette/hook-up-palette.PNG)

-   Green #16BD67 is used for section names.
-   Orange #E67410 is used for verdicts given by the catch verification section.
-   Black #010320 is used for content text colour and the navigation bar.
-   White #EDEDF4 is used as pages' background colour.
-   Red #D20B0B is used for:
    -   site logo & name,
    -   navigation bar,
    -   icons
    -   anchor links.

#### **Fonts**

For the navigation bar, I have chosen [Red Rose](https://fonts.google.com/specimen/Red+Rose?query=red).

For the body and footer, I have chosen [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mont).

#### **Wireframes**

This site was designed according to a "mobile first" philosophy, using [balsamiq wireframes](https://balsamiq.com/wireframes/). With it, the basic structure is drawn, as well as changes in layout between mobile and desktop versions.

The current wireframe file (version 04) can be found : [here](design-tools/wireframes/FitForWork_V04.bmpr).

| Mobile Versions                                                                                 | Desktop Versions                                                                                         |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![index page mobile view](design-tools/wireframes/wireframe-images/index-html.png)              | ![index page desktop view](design-tools/wireframes/wireframe-images/index-html-desktop.png)              |
| ![onsite massage mobile view](design-tools/wireframes/wireframe-images/onsite-massage-html.png) | ![onsite massage desktop view](design-tools/wireframes/wireframe-images/onsite-massage-html-desktop.png) |
| ![book trial mobile view](design-tools/wireframes/wireframe-images/book-trial-html.png)         | ![book trial desktop view](design-tools/wireframes/wireframe-images/book-trial-html-desktop.png)         |

Wireframe version historic:

-   V01: original version.
-   V02: based on feedback from my mentor (Dick Vlaanderen). Reduced number of pages.
-   V03: improved the visual attractiveness of the design by giving more breathing space to the different elements.
-   V04: (current): updated book-trial page to add contact details and an image to make it more informative and attractive. Upgraded responsive-design between desktop and mobile content: only form and contact details visible in the latter.

[Back to Content](#Content)

---

## **Features**

### **Existing Features**

-   Responsive Design

With a _mobile-first_ design principle in mind, the site's layout changes according to the display size, with the most important information shown on mobile-size devices.

-   Easy-to-the-eye colour theme

In particular the blend of a white _with gray notes_ and black _with lighter than standard depth_ gives a relaxing reading environment.

-   Covid-19 Safety information

A modal pop-up placed in the navgation bar informs users of Fit Fo Work's measures to in regards to Covid-19.

-   Contact form

Used to book a massage trial. The form informs the user if they have not completed the mandatory fields of the form, for example: name, email address, etc, and an "Agree to terms and conditions" checkbox. Upon submission of the form, the user gets a notification that the form has been sent and should expect to be contacted by Fit For Work. It must be noted that the current form design is not fully functional (no backend servicing) due to my technology limitations.

-   Social link

Located in footer section.

### **Future Features**

-   Contact form

To design an implement backend to collect the submited information in a database.

-   Additional services

Additional pages that describe further treatment offerings to be implemented.

-   Additional languages

An option for the user to choose to to view the site in English or Danish.

[Back to Content](#Content)

---

## **Technologies Used**

### **Languages**

-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

_Note_: whilst JavaScript is not a part of the project curriculum, a customised code has been added to the contact form located in the [book-trial.html](book-trial.html) to allow a confirmation of success pop up modal to function and improve the user experience. The code was generously provided by my mentor (Dick Vlaanderen).

It is **important to note**, that in book-trial.html, it is necessary to add the custom script for the form right before the closing body tag to allow for functionality, overriding the Bootstrap documentation instruction regarding its own scripts.

### **Libraries**

-   [Bootstrap](https://getbootstrap.com/)
-   [Font-Awesome](https://fontawesome.com/)
-   [Google fonts](https://fonts.google.com/)

### **Tools**

-   [Git](https://git-scm.com/)
-   [GitHub](https://github.com/)
-   [Visual Studio Code](https://code.visualstudio.com/)

[Back to Content](#Content)

---

## **Testing**

### **HTML code validation**

To verify the quality of the written HTML documents, I used the automated [W3C Markup Validator](https://validator.w3.org) service. The code was tested with the Direct Input tool.

| Page                    | Status                                                                                                               | Actions                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **index.html**          | [Warning](testing/w3c-code-validation/index-html/w3c-code-validation-index-html-r01-110920.pdf)                      | Removed article tags in Welcome to fit For Work section.                                                                                               |
| **index.html**          | [No errors](testing/w3c-code-validation/index-html/w3c-code-validation-index-html-r02-110920.pdf)                    | None.                                                                                                                                                  |
| **onsite-massage.html** | [No errors](testing/w3c-code-validation/onsite-massage-html/w3c-code-validation-onsite-massage-html-r01-110920.pdf)  | None.                                                                                                                                                  |
| **book-trial.html**     | [Warning and Errors](testing/w3c-code-validation/book-trial-html/w3c-code-validation-book-trial-html-r01-110920.pdf) | Removed article tags in Book Your Free Massage Trial section. Changed aria-labelledby="Contact Form sent confirmation" to aria-labelledby="form-sent". |
| **book-trial.html**     | [No errors](testing/w3c-code-validation/book-trial-html/w3c-code-validation-book-trial-html-r02-110920.pdf)          | None.                                                                                                                                                  |

### **CSS code validation**

To verify the quality of the written css document, I used the automated [W3C Markup Validator CSS Validation Service](https://jigsaw.w3.org/css-validator) service. The code was tested with the Direct Input tool.

| Page          | Status                                                                                       | Actions                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **style.css** | [Warning and Errors](testing/w3c-code-validation/css/w3c-code-validation-css-r01-110920.pdf) | In .serv-butt, removed border-block-end-width: 1em. In .img-resp-grid-2, removed height: cover |
| **style.css** | [No errors](testing/w3c-code-validation/css/w3c-code-validation-css-r02-110920.pdf)          | None.                                                                                          |

### **Overall website test**

I performed regular overall tests of the website by verifying that: images load correctly up, links work, navigation bar works and is responsive, contact form works as intended, text is correctly displayed, testimonial carousel works.

Various members of the Code Institute Slack Community also tested my website, contributing with input to the bug troubleshooting section.

### **Responsiveness**

I tested the site for responsiveness using [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), by varying width resolution. I also tested it on an [iPhone XR](https://www.apple.com/uk/shop/buy-iphone/iphone-xr), [Samsung Galaxy S7](https://www.samsung.com/uk/smartphones/galaxy-s7/overview/), [iPad Pro 11](https://www.apple.com/uk/ipad-pro/) and various [Windows](https://www.microsoft.com/en-gb/windows/) based computer with different screen sizes.

It was found to be adequately responsive by myself and some members of the [Code Institute Slack Community](https://code-institute-room.slack.com).

In particular:

-   the collapsable navigation bar functions at the designated resolution.
-   The correct sections are shown/hidden depending on device sizes.

### **Social media link**

The link located in the footer section functions.

### **Contact Form**

-   Tried to submit an empty form and verified that an error message about the required fields appears.
-   Tried to submit the form with an invalid email address and verified that a relevant error message appears.
-   Tried to submit the form with an invalid phone number (alphabetical characters) and verified that a relevant error message appears.
-   Try to submit the form with all inputs valid and verified that a success message appears.

### **Bugs and fixes**

I found and fixed various bugs in the final testing phase of the project; those are listed below.

I have also asked my fellow students at the Code Institute to review my site and report any bugs or issues they may discover.

#### **HMTL fixes**

-   In book.trial.html, added "Optional fields" to "Therapies you are interested in".
-   In all .html files, responsive grid 2, right section, added a row to align image on the right-hand side with content below h2 on the left-hand side.
-   In index.html, removed all "br" tags.
-   In onsite-massge.html, removed all "br" tags.
-   In book-trial.html, removed all "br" tags.
-   In all .html files, verified and removed all leftover "br" tags, added to responsive grid 1 an id=res-gri-1.

#### **CSS fixes**

-   In style.css, for p category, adjusted font style, line spacing and letter spacing to make reading more pleasant.
-   In style.css, removed redundant article p selector.
-   In style.css, adjusted font size for .form-opt-fiel to 0.85em.
-   In style.css, for callout-p class selector, removed margin-bottom: 10px.
-   In style.css, corrected syntax for .modal-title, font-family: "Montserrat", sans-serif.
-   In style.css, corrected syntax for .cov-moda-p and .cov-moda-lis, font-family: Montserrat, sans-serif.
-   In style.css, adjusted font size and color for Covid-19 Safety modal. Also added selector .cov-moda-lis li to define appropriate text display format.
-   In style.css, adjusted h2 margin-bottom to 15px.
-   In style.css, defined #blank-h2 with a height of 56px.
-   In style.css, added media queries to make testimonials responsive at different width resolutions.
-   In style.css, adjusted footer margin-top to 50px.
-   In style.css, for #res-gri-1, defined margin-top of 2rem.
-   In style.css, for .img-resp-grid-2, removed margin:auto.

#### **Miscellaneous fixes**

-   Moved wireframes folder and its content out of assets folder and placed it into fit-for-work folder, since this is supporting documentation that is not required to run the website.

[Back to Content](#Content)

---

## **Deployment**

The webiste was developed in [Visual Studio Code](https://code.visualstudio.com/), version controlled with [Git](https://git-scm.com/) and the repositary kept in [GitHub](https://github.com/).

### **GitHub Pages**

I deployed the site using [GitHub Pages](https://pages.github.com/).

-   Opened up **GitHub** in the browser.
-   Signed in with my **username** and **password**.
-   Selected my **repositories**.
-   Navigated to **Axel713/fit-for-work**.
-   In the top navigation, clicked **settings**.
-   Scrolled down to the **GitHub Pages** section.
-   Selected **Master Branch** from the **Source** dropdown menu.
-   Clicked to **confirm** my **selection**.
-   [Fit For Work](https://axel713.github.io/fit-for-work/) is now **live** in **GitHub Pages**.

### **Local deployment**

To clone **Fit For Work** from GitHub:

-   Navigate to **Axel713/fit-for-work**.
-   Click the green **Clone or Download** button.
-   **Copy** the url in the dropdown box.
-   In your **IDE** (Integrated Development Environment), open up your terminal.
-   **Locate** your desired file location.

Copy the following code and input it into your terminal to clone Money Pot:

`git clone https://github.com/Axel713/fit-for-work`

[Back to Content](#Content)

---

## **Credits**

### **Project Content**

-   The grid structure, modals, testimonials and contact form were based on [Bootstrap](https://getbootstrap.com/) code provided in the documentation.
-   The icons were found at: [Font-Awesome](https://fontawesome.com/).
-   The fonts were found at: [Google fonts](https://fonts.google.com/).
-   The text content is translated and adapted from the current [Fit For Work website](https://fitforwork.dk) (available in Danish only).
-   The script code section used in [book-trial.html](book-trial.html) was generously provided by my mentor (Dick Vlaanderen).

### **Media**

-   The photos used in this site were obtained from Fit For Work, who owns them.
-   The colour palette was made using [Coolors](https://coolors.co/).

### **Acknowledgements**

Special thanks must go to:

-   My mentor [Dick Vlaanderen](https://www.linkedin.com/in/dick-vlaanderen/) for his ever-valuable feedback.
-   The Code Institute Slack Community.

[Back to Content](#Content)

---
