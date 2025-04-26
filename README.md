
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

- Deploy your project using **Netlify**.
- Make sure all filters/search work correctly even on the deployed site.
- Once deployed, submit your final form link.

---

## 🎨 Sample UI (Reference)

> Design is secondary — functionality matters more!

![Sample Page](https://cmsuatstor.blob.core.windows.net/cms-uat/assets/image_8e9f8f882a.png)
![Autocomplete](https://cmsuatstor.blob.core.windows.net/cms-uat/assets/image_1_c40c34dccc.png)

---

## 🏁 Good Luck and Happy Coding! 🚀
