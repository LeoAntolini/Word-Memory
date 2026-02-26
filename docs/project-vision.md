# 📘 Word Memory - Project Vision (v1)

## 1. Project Overview

**Word Memory** is a web-based vocabulary learning system designed to help users memorize English words more effectively using visual association, audio feedback, and adaptive review logic.

Instead of relying on direct translation, the system focuses on recognition, recall, and reinforcement through interaction.

---

## 2. Problem Statement

Traditional vocabulary learning methods often fail because they:

- Rely heavily on translation
- Present words without meaningful association
- Lack proper review memorization

As a result, learners frequently forget words shortly after studying them.

---

## 3. Project Goals

The main goals of **Word Memory** are:

- Improve long-term vocabulary retention
- Reduce dependence on translation
- Apply cognitive science principles in practice
- Serve as a real-world development project
- Integrate language learning with software engineering practice

---

## 4. Target Audience

Initial target audience:

- Individual learning English vocabulary
- Beginner to advanced learners
- Developers learning English for professional purposes

The first version is designed primarily for **personal use**, with future scalability in mind.

---

## 5. Scope - MVP (Version 1)

### ✅ Included Features

- Vocabulary study using **single words**
- Image-based questions
- Four answer options per exercise
- One correct answer per question
- Audio playback for selected answers
- Two-step confirmation:
    1. Select an option (audio plays)
    2. Confirm the answer
- Difficult levels:
    - Basic
    - Intermediate
    - Advanced
- Adaptive review logic based on user performance

### ❌ Excluded Features (for now)

- Sentences and grammar explanations  
- Direct translation display  
- User authentication  
- Gamification (points, rankings, streaks)  
- AI-generated content  

---

## 6. Study Flow

1. User selects a difficulty level  
2. System displays:
   - A central image  
   - Four word options  
3. User selects an option:
   - The system plays the pronunciation audio  
   - No validation occurs yet  
4. User clicks **Confirm**  
5. System validates the answer and provides feedback:
   - **Correct**
   - **Incorrect**

---

## 7. Review and Error Handling Logic

- If the user answers **correctly**:
  - The review interval increases  
  - The next review date is scheduled  

- If the user answers **incorrectly (first time in the session)**:
  - The word is added to a **review later today** list  

- At the end of the daily session:
  - All incorrectly answered words are reviewed again  

- If the user answers incorrectly **a second time**:
  - The correct answer is shown  
  - Audio is played  
  - The word is scheduled for review on the next day  

This approach reinforces memory without causing frustration.

---

## 8. Data Model (Conceptual)

Each word contains:

- `id`
- `word`
- `level`
- `imageUrl`
- `audioUrl`
- `reviewInterval`
- `nextReviewDate`
- `wrongCountToday`
- `lastReviewedAt`

---

## 9. Technical Philosophy

- The frontend is fully **decoupled** from storage and backend logic  
- Media files (images and audio) are stored externally  
- The frontend consumes **only URLs**  
- Content is loaded **on demand**  
- The system is designed to scale without performance degradation  

---

## 10. Language and Documentation Standards

- UI language: **English**
- Codebase language: **English**
- Commits: **English**
- Documentation: **English**

This ensures professional exposure to technical English.

---

## 11. Future Enhancements

- Sentence-based learning  
- Optional translation toggle  
- User accounts and progress tracking  
- Statistics and analytics  
- Mobile application version  
- Support for additional languages  

---

## 12. Career and Portfolio Value

This project demonstrates:

- Product-oriented thinking  
- Application of learning science  
- Clean architecture principles  
- Git-based workflow  
- Incremental development practices