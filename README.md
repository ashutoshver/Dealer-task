# Dealer Dashboard Application

A comprehensive dealer management dashboard built with React, Vite, and Tailwind CSS.

## Features

### Task A: Responsive Dealer Dashboard UI
- **Navigation Sidebar**: Clean, modern sidebar with navigation menu and user profile
- **Top Header**: Dashboard header with notifications, messages, and date display
- **Main Content Area**: Flexible content area for dashboard and forms
- **Dealer List Table**: Professional table displaying dealer information with columns:
  - Dealer Name
  - Location
  - Contact
  - Status (with color-coded badges)
- **Sorting**: Click on "Dealer Name" column header to toggle ascending/descending sort
- **Filtering**: Filter dealers by status (All, Active, Inactive, Pending)

### Task B: Dealer Profile Form
- **Form Fields**:
  - Dealer Name (required)
  - Address (required, textarea)
  - Email (required, validated format)
  - Phone (required, validated format - minimum 10 digits)
  - Operating Hours (required)
- **Validation**: Real-time validation with error messages
- **Preview Card**: Styled preview card displays submitted data with:
  - Professional gradient background
  - Organized information layout
  - Contact links for email and phone
  - Submission timestamp

### Task C: Search & Pagination
- **Search Bar**: Filters dealers by name or location in real-time
- **Pagination**:
  - 10 records per page
  - Page navigation with Previous/Next buttons
  - Smart page number display (shows current page and surrounding pages)
  - Total count and current range display
- **Combined Search & Pagination**: Search results paginate correctly

### Task D: Reusable Modal Component
- **View Mode**: Read-only display of complete dealer details
- **Edit Mode**: Full edit form with validation
- **Features**:
  - Backdrop click to close
  - Smooth animations
  - Fully validated edit form
  - Real-time updates to dashboard list
  - Reusable across the application

## Additional Features
- **Dashboard Statistics**: Summary cards showing:
  - Total Dealers
  - Active Dealers
  - Inactive Dealers
  - Pending Dealers
- **Tab Navigation**: Switch between Dashboard and Add New Dealer views
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
project-task/
├── src/
│   ├── components/
│   │   ├── DealerList.jsx       # Main dealer list with sorting, filtering, search, pagination
│   │   ├── DealerProfileForm.jsx # Form component with validation and preview
│   │   ├── Header.jsx            # Top header component
│   │   ├── Layout.jsx            # Main layout wrapper
│   │   ├── Modal.jsx             # Reusable modal for view/edit
│   │   └── Sidebar.jsx           # Navigation sidebar
│   ├── data/
│   │   └── mockDealers.js        # Mock dealer data (15 dealers)
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Usage Guide

### Viewing Dealers
1. Navigate to the "Dealer Dashboard" tab (default view)
2. Browse the dealer list with all information displayed in a table
3. Use the search bar to find dealers by name or location
4. Filter by status using the filter buttons (All, Active, Inactive, Pending)
5. Click the "View" button to see complete dealer details in a modal

### Editing Dealers
1. Click the "Edit" button on any dealer row
2. Modal opens with editable form fields
3. Make changes and click "Save Changes"
4. Updates reflect immediately in the dashboard list
5. Form validates all required fields and formats

### Adding New Dealers
1. Click the "Add New Dealer" tab
2. Fill in all required fields (marked with *)
3. Form validates in real-time
4. Click "Submit" to see a preview card with the entered data
5. Use "Reset" to clear the form

### Sorting and Pagination
- Click the "Dealer Name" column header to toggle sort order (↑/↓)
- Use pagination controls at the bottom to navigate through pages
- Each page shows up to 10 dealers
- Search and filter results are paginated correctly

## Technologies Used

- **React 18.3.1**: UI library
- **Vite 6.0.3**: Build tool and dev server
- **Tailwind CSS 3.4.15**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.
