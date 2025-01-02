# Ethereum Gas Tracker

## Overview

Ethereum Gas Tracker is a simple and intuitive web application that allows users to monitor the current gas prices on the Ethereum network. By leveraging the Infura API, the app fetches real-time gas prices and displays them across different tiers (Low, Medium, High), along with the estimated transaction costs in ETH.

## Features

- **Real-Time Gas Prices:** Fetches the latest gas prices from the Ethereum mainnet using Infura.
- **Multiple Gas Tiers:** Displays gas prices in Low, Medium, and High tiers.
- **Transaction Cost Estimation:** Calculates and shows the estimated cost of a standard transaction based on the selected gas price.
- **Responsive UI:** Built with Material-UI for a clean and responsive user interface.
- **Error Handling:** Provides user-friendly error messages in case of failures.

## Live Demo

Access the live application [here](https://soradimichi.github.io/gas-checker/).

## Technologies Used

- **Preact:** A lightweight alternative to React for building user interfaces.
- **Material-UI (MUI):** React components for faster and easier web development.
- **Ethers.js:** A library for interacting with the Ethereum blockchain.
- **Infura:** Provides Ethereum API access.
- **gh-pages:** For deploying the application to GitHub Pages.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/soradimichi/gas-checker.git
   cd gas-checker
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your Infura Project ID:

   ```env
   VITE_ID=your_infura_project_id
   ```

   > **Note:** You can obtain an Infura Project ID by signing up at [Infura](https://infura.io/).

## Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Building for Production

To build the application for production:

```bash
npm run build
```

The optimized build will be available in the `dist` folder.

## Deployment

The project is configured to be deployed using GitHub Pages via the `gh-pages` branch. To deploy the latest build:

```bash
npm run deploy
```

Ensure that the `homepage` field in your `package.json` is set to `https://soradimichi.github.io/gas-checker/`.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Preact](https://preactjs.com/)
- [Material-UI](https://mui.com/)
- [Ethers.js](https://ethers.org/)
- [Infura](https://infura.io/)

---

Feel free to reach out if you have any questions or suggestions!
