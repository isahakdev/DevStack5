# **Dev Stack Builder**

Dev Stack Builder is a responsive React website where users can explore technologies and build their own development stack.

## **Technologies Used**

* React
* TypeScript
* Tailwind CSS
* Vite
* React Toastify
* JSON

## **Features**

* Explore different technologies.
* Add and remove technologies from your stack.
* Fully responsive for mobile, tablet, and desktop.

## **React Questions & Answers**

### **1. What is JSX?**

JSX lets us write HTML-like code inside React.

### **2. What is the difference between props and state?**

Props pass data from parent to child. State stores and updates data in a component.

### **3. What does `useState` do?**

`useState` stores and updates data. I used it for the selected stack and mobile menu.

### **4. What does `useEffect` do?**

`useEffect` runs code after the component renders. I used it to load the JSON data.

### **5. Why is `key` needed in `.map()`?**

A unique `key` helps React update list items correctly.

### **6. What is conditional rendering?**

Conditional rendering shows different UI based on a condition. I used it for the empty stack message.

### **7. How does a parent and child communicate?**

A parent sends data with props. A child calls a parent function through props.