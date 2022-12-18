# BankingApp

Demo of a banking application whose parts are fully connected to each other. The application uses exchange rates from the API.

## Stack

- React with TypeScript
- Redux Toolkit
- React Router
- Styled Components
- React Hook Form
- React Circular Progressbar
- Chart.js
- Emoji Picker React
- React Lorem Ipsum
- React-Date-Picker
- react-loader-spinner
- uuid
- NBP Web API
- localStorage

## Installation

1. `git clone https://github.com/MiloszBaranskiDev/BankingApp.git`
2. `cd BankingApp`
3. `npm i`
4. `npm start`

## Views

- ### Home
  - total balance converted into PLN
  - total incomes and outcomes converted into PLN
  - chart with historical prices of favorite currency selected in the application settings
  - last transactions
  - last goals
  - tiles with additional navigation
- ### Wallet
  - total balance converted into PLN
  - total incomes and outcomes converted into PLN
  - pie chart with the currencies held
  - balance of currencies held
  - setting financial goals
  - deposit and withdrawal of funds from goals
  - editing and deleting goals
- ### Currencies
  - current exchange rates from API
  - ability to swap the currencies held according to the current exchange rates
  - charts with historical currency prices with the ability to change dates
- ### Transfer
  - send a transfer in the selected currency
- ### Transactions
  - accordion list of transactions and their details
- ### Help
  - linking to FAQ and chat
- ### FAQ
  - accordion list of questions and answers
  - typing in the input allows you to search for the question and answer
- ### Chat
  - demo chat with bot
  - ability to send emoticons
- ### Notifications
  - list of notifications
  - ability to open a notification and delete it
- ### Profile
  - change user photo
  - change user data
- ### Settings
  - toggle dark/light mode
  - change theme color
  - change currency whose chart will be shown on the home page
  - restore app to default data and settings
