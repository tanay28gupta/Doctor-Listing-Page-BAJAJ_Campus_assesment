# 📄 Doctor Listing Page (Bajaj Campus Assessment)

## 🎯 Objective

Build a **Doctor Listing Webpage** where users can:

- Search for doctors by name.
- Apply filters like consultation type and specialties.
- Sort doctors by fees or experience.
- All data should come from a **single API call**.
- All filtering and sorting should happen on the **client side only**.
- 3 hours are given for completing this task
Once complete, deploy the project and fill out the final submission form.

---

## 🧩 Features to Implement

### 🔍 1. Autocomplete Search Bar

- Located at the top of the page.
- Shows up to **3 suggestions** based on the typed doctor name.
- Clicking a suggestion or pressing Enter filters the list.
- No suggestions are shown if no matches are found.

### 🎛 2. Filter Panel

- **Consultation Type (Single Select):**
  - Options: `Video Consult`, `In Clinic`
- **Specialties (Multi Select):**
  - Multiple specialty checkboxes (e.g., Dentist, Cardiologist).
  - Users can apply more than one specialty at a time.
- **Sorting Options:**
  - By `fees` (ascending)
  - By `experience` (descending)

**Note:** Filters should work in combination. The **first applied filter takes priority**.

---

## 🔗 API & Data Handling

- Fetch doctor data from the following API:
  
https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json


- **Only one API call** is allowed.
- All filtering, searching, and sorting must happen on the **frontend**.
- Applied filters should be reflected in the **URL query parameters**.
- Use **browser navigation** (Back/Forward) to retain filters from the URL.

---

## ✅ Testing Requirements

Add the following `data-testid` attributes to make your app testable:

| `data-testid`                        | Element Description                                           |
|-------------------------------------|---------------------------------------------------------------|
| `autocomplete-input`                | Input box for searching doctor names                         |
| `suggestion-item`                   | Autocomplete dropdown item (max 3)                           |
| `doctor-card`                       | Wrapper for each doctor                                      |
| `doctor-name`                       | Doctor's name                                                |
| `doctor-specialty`                  | Displayed specialties of doctor                              |
| `doctor-experience`                 | Doctor's experience info                                     |
| `doctor-fee`                        | Doctor's fee info                                            |
| `filter-header-speciality`         | Header for Specialty filter                                  |
| `filter-header-moc`                | Header for Consultation Mode filter                          |
| `filter-header-sort`               | Header for Sort filter                                       |
| `filter-video-consult`             | Radio: Video Consult                                         |
| `filter-in-clinic`                 | Radio: In Clinic                                             |
| `filter-specialty-*`               | Checkbox for each specialty (e.g. Dentist, Dermatologist...) |
| `sort-fees`                         | Sort by fees (ascending)                                     |
| `sort-experience`                  | Sort by experience (descending)                              |

> ⚠️ Use the **exact** `data-testid` values from the table above for proper testing.

---

## 🚀 Deployment Instructions

- Make sure all filters/search work correctly even on the deployed site.
- Once deployed, submit your final form link.
- Form link will be given by the company
---

## 🎨 Sample UI (Reference)

> Design is secondary — functionality matters more!

![Sample Page](https://cmsuatstor.blob.core.windows.net/cms-uat/assets/image_8e9f8f882a.png)
![Autocomplete](https://cmsuatstor.blob.core.windows.net/cms-uat/assets/image_1_c40c34dccc.png)

---

## 🏁 Good Luck and Happy Coding! 🚀
