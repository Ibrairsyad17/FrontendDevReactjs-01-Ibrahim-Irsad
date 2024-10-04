# Sekawan Media Technical Test

Ibrahim Irsad - Internship Program - Technical Test

## Task

### Page Structure

- [x] Main

  - [x] Filter navigation
  - [x] Open now (client side filter)
  - [x] Price (client side filter)
  - [x] Categories/Cuisines (server side search filter)
  - [x] Section
    - [x] Restaurant item
    - [x] Image (use first item in `photos`)
    - [x] Cuisine / Categories (use first item in `categories`)
    - [x] Rating
    - [] Price range
    - [x] Open / Closed
    - [x] Restaurant name
    - [x] Learn more (navigate to Detail View)

- [x] Detail View
  - [x] Restaurant Name & Rating
  - [] Map (optional)
  - [x]Section
    - [x] Review item
    - [x] Image
    - [x] Name
    - [x] Rating
    - [x] Text

## How to run this project

### Requirements

- Node.js `v20.9.0` or higher
- NPM `10.8.3` or higher
- React `18.3.1` or higher

### Install

1. Clone this repository

```bash
git clone https://github.com/Ibrairsyad17/FrontendDevReactjs-01-Ibrahim-Irsad.git
```

2. Install the dependencies

````bash
npm install

3. Install JSON Server

```bash
npm install -g json-server
````

4. Run JSON Server

```bash
json-server --watch db.json --port <port>
```

5. Set environment variables

- Copy .env.example and rename it to .env
- Update the values with your values
- You can use this public API for the PUBLIC_URL: https://restaurants-api-json-server.vercel.app/ (Not Recommended)

```bash
VITE_PUBLIC_URL=YOUR_PUBLIC
VITE_DEV_URL=YOUR_JSON_SERVER_URL
```
