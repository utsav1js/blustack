
> **`HOW TO RUN`**

In the project directory, you can run:

### `npm install`
Installs all the dependencies of the project.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br /><br /><br />

> **`TEST CASES`**

|Description | Execution steps | Expected output|
|--- | --- | ---|
|Localization |Select Spanish language from Language selector toggle button | Header data,x days ago,x days ahead,Tabs text should be shown in Spanish|
|Campaign Date change | Select today's date in Past Campaign tab for any campaign | The campaign should be removed from Past campaign tab and appear in Live Campaign tab|
|Campaign Date change | Select any previous date in live Campaign tab for any campaign | The campaign should be removed from live or upcoming campaign tab and appear in past Campaign tab|
|Campaign Date change | Select any future date in past Campaign tab or live campaign tab for any campaign | The campaign should be removed from live or past campaign tab and appear in upcoming Campaign tab|
|Campaign Tab Change | Click on any tab from upcoming live or past campaign | The campaigns should update to upcoming, live or past campaign respectively  |
| View Price | Click on view price action for any campaign | A modal should open showing the price information for the selected campaign |
| View Price | On open modal of price campaign click on close button | Price modal should be closed |
