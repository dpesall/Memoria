# Memoria - Project Outline

## Overview

Memoria is a React Native/Expo mobile quiz application focused on Bible trivia. Players answer timed questions across various biblical topics, earning points based on speed and accuracy.

---

## Technology Stack

- **Framework:** React Native with Expo SDK 51
- **Audio:** expo-av for sound effects
- **Navigation:** Custom stack-based navigation (no external routing library)
- **State Management:** React useState/useRef hooks (no Redux/Context)

---

## File Structure

```
/
├── App.js                      # Root component
├── App.styles.js               # Root styles
├── assets/
│   ├── images/                 # App icons and logos
│   └── sounds/                 # Audio files (.wav, .mp3)
├── src/
│   ├── components/             # UI components (each in own folder)
│   │   ├── MainMenu/
│   │   ├── TitleBar/
│   │   ├── Play/
│   │   ├── Freeplay/
│   │   ├── Quiz/
│   │   ├── GameOver/
│   │   ├── Settings/
│   │   └── Credits/
│   ├── modules/                # Reusable UI modules
│   │   ├── HomeIcon.js
│   │   ├── HomeIcon.styles.js
│   │   ├── SoundIcon.js
│   │   └── SoundIcon.styles.js
│   ├── utils/                  # Utility functions
│   │   ├── Stack.js            # Navigation stack class
│   │   └── QuestionGenerator.js
│   ├── constants/
│   │   └── images.js           # Image asset exports
│   ├── data/                   # Question data
│   │   └── questions/          # JSON files by topic
│   └── styles/
│       └── theme/              # Design tokens
│           ├── colors.js
│           ├── spacing.js
│           ├── typography.js
│           └── sizing.js
```

---

## Naming Convention

### StyleSheet Naming (BEM-like)

All style names follow the pattern: `componentName_elementName`

- **componentName:** PascalCase component name converted to camelCase
- **elementName:** Describes the specific element being styled

Examples:
```javascript
// In Quiz.styles.js
quiz_container        // Main container
quiz_header           // Header section
quiz_answerButton     // Individual answer button
quiz_answerButtonCorrect  // Modifier for correct state
quiz_progressBar      // Progress bar element

// In MainMenu.styles.js
mainMenu_container
mainMenu_title
mainMenu_button
mainMenu_buttonText
mainMenu_logoContainer

// In GameOver.styles.js
gameOver_container
gameOver_heroScore
gameOver_statsCard
gameOver_statRow
```

### Component File Naming

Each component has its own folder containing:
- `ComponentName.js` - Component logic
- `ComponentName.styles.js` - StyleSheet definitions

---

## Navigation System

### Stack Utility Class (`src/utils/Stack.js`)

A custom stack data structure for managing navigation history.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(item)    // Add page to stack
  pop()         // Remove and return top page
  peek()        // Return top page without removing
  isEmpty()     // Check if stack is empty
  size()        // Return stack length
  clear()       // Empty the stack
}
```

### Navigation Flow

The app maintains a `pageStack` state in `App.js`. Navigation is handled via `changePage(newPage)`:

- `'home'` - Clears stack and pushes 'home'
- `'back'` - Pops current page from stack
- Any other value - Pushes new page onto stack

The `MainMenu` component reads `pageStack.peek()` to determine which component to render.

### Page Hierarchy

```
home
├── play
│   └── freeplay
│       └── quiz (internal view state)
│           └── gameOver (internal view state)
├── settings
└── credits
```

---

## Component Specifications

### App.js (Root)

**State:**
- `pageStack` - Stack instance for navigation
- `volumeSetting` - String: 'Mute Sound' | 'Unmute Sound'

**Structure:**
- SafeAreaView container
- TitleBar (flex: 1)
- MainMenu content area (flex: 12)

**Props passed down:**
- `setCurrentPage` (changePage function)
- `volumeSetting`
- `setVolumeSetting`

---

### TitleBar

**Purpose:** Persistent top bar with navigation and sound controls.

**Contains:**
- HomeIcon (left) - Navigates to home
- SoundIcon (right) - Toggles volume setting

---

### MainMenu

**Purpose:** Router component that renders the appropriate page based on stack state.

**Props:**
- `currentPage` - The page stack
- `setCurrentPage` - Navigation function
- `volumeSetting`
- `setVolumeSetting`

**Routing Logic:**
```javascript
switch (currentPage.peek()) {
  case 'home':     return <MenuOptions />
  case 'play':     return <Play />
  case 'settings': return <Settings />
  case 'credits':  return <Credits />
  case 'freeplay': return <Freeplay />
}
```

**Home View Contains:**
- App title "Memoria"
- Logo image
- Three buttons: Play, Settings, Credits

---

### Play

**Purpose:** Game mode selection menu.

**Contains:**
- Header with title "Play"
- Freeplay button - navigates to freeplay
- Back button - navigates back

---

### Freeplay

**Purpose:** Configure and launch a quiz session.

**Internal State:**
- `pageView` - String: 'main' | 'topic' | 'mode' | 'quiz'
- `topic` - Selected topic (default: 'Any')
- `mode` - Selected mode (default: 'Standard')

**Available Topics:**
- 'Any'
- 'People'
- 'New Testament Stories'
- 'Old Testament Stories'
- 'Geography'

**Available Modes:**
- 'Standard'
- 'Survival'

**Views:**

1. **Main View:**
   - Header "Freeplay"
   - Topic section - displays selected topic, tappable to change
   - Mode section - displays selected mode, tappable to change
   - Start button - launches quiz
   - Back button - returns to Play menu

2. **Topic Selection View:**
   - Header "Select Topic"
   - List of topic buttons
   - Back button

3. **Mode Selection View:**
   - Header "Select Mode"
   - List of mode buttons
   - Back button

4. **Quiz View:**
   - Renders Quiz component with selected topic/mode

---

### Quiz

**Purpose:** Core gameplay component.

**Props:**
- `setCurrentPage` - App navigation
- `volumeSetting` - For sound playback decisions
- `setPageView` - Freeplay's view state setter
- `topic` - Selected topic
- `mode` - 'Standard' | 'Survival'

**Internal State:**
- `showInstructions` - Boolean, shows mode instructions initially
- `showQuestionResults` - Boolean, shows after answering
- `score` - Cumulative points
- `correctAnswers` - Count of correct answers
- `wrongAnswers` - Count of wrong answers
- `questionNumber` - Current question index (0-based internally)
- `currentStreak` - Consecutive correct answers
- `longestStreak` - Best streak achieved
- `gameOver` - Boolean, game has ended
- `viewGameOverScreen` - Boolean, showing results
- `question` - Current question object
- `selectedAnswer` - User's selected answer
- `isCorrect` - Boolean, was answer correct
- `correctAnswer` - Revealed correct answer (on wrong/timeout)
- `timeUp` - Boolean, timer expired
- `pointsEarned` - Points for current question
- `progressAnim` - Animated.Value for progress bar

**Constants:**
- `STANDARD_TOTAL_QUESTIONS = 10`

**Timer System:**
- 10-second countdown per question
- Animated progress bar (width animates from full to 0)
- Timer listener checks when progress reaches ~1%
- On timeout: treats as wrong answer

**Scoring System:**
- Points = 500 + (500 * timeRemaining / totalTime)
- Range: 500 (last moment) to 1000 (instant)
- Timeout = 0 points

**Game Modes:**

1. **Standard Mode:**
   - Exactly 10 questions
   - Wrong answers don't end game
   - Shows question progress: "Question X/10"
   - Game ends after 10th question

2. **Survival Mode:**
   - Unlimited questions
   - One wrong answer or timeout ends game
   - Shows: "Question X"
   - Tracks longest streak

**Sound Effects:**
- Correct answer: correct-chime.wav
- Wrong answer: incorrect-chime.wav
- Game over (Survival): game-over.wav
- Sounds only play if volumeSetting === 'Mute Sound' (inverted logic - "Mute Sound" means sound is ON, showing the action to mute)

**Views:**

1. **Instructions View:**
   - Mode title and description
   - Start button
   - Back button

2. **Question View:**
   - Header with question count and score
   - Progress bar (animated)
   - Question text
   - 4 answer buttons
   - Points earned (after answering)

3. **Results Footer:**
   - If not game over: Next and Quit buttons
   - If game over: View Results button

**Answer Button States:**
- Default state
- Selected + Correct (green)
- Selected + Wrong (red)
- Revealed Correct (green, when user was wrong)
- Timeout state (all wrong except correct one)

---

### GameOver

**Purpose:** Display end-of-game statistics.

**Props:**
- `setPageView` - Returns to Freeplay main
- `mode` - 'Standard' | 'Survival'
- `score` - Final score
- `correctAnswers` - Total correct
- `wrongAnswers` - Total wrong
- `questionNumber` - Questions answered
- `totalQuestions` - Total questions (Standard mode only)
- `longestStreak` - Best streak

**Display:**

1. **Hero Section:**
   - Title: "Quiz Complete!" (Standard) or "Game Over" (Survival)
   - Large score display
   - "points" label

2. **Stats Card (Standard Mode):**
   - Correct: X/10
   - Wrong: X/10
   - Accuracy: X%
   - Avg Points: X

3. **Stats Card (Survival Mode):**
   - Questions: X
   - Best Streak: X

4. **Exit Button:**
   - Returns to Freeplay main view

**Calculations:**
- Accuracy = Math.round((correctAnswers / totalQuestions) * 100)
- Avg Points = Math.round(score / correctAnswers) or 0 if no correct

---

### Settings

**Purpose:** App configuration.

**Props:**
- `setCurrentPage` - Navigation
- `volumeSetting` - Current setting
- `setVolumeSetting` - Toggle function

**Contains:**
- Header "Settings"
- Logo image
- Sound toggle button (shows current setting)
- Back button

**Sound Toggle Logic:**
- Button displays current `volumeSetting` value
- Clicking toggles between 'Mute Sound' and 'Unmute Sound'

---

### Credits

**Purpose:** Attribution screen.

**Props:**
- `setCurrentPage` - Navigation

**Contains:**
- Header "Credits"
- Logo image
- Back button

---

## Modules

### HomeIcon

**Purpose:** Tappable home icon for navigation.

**Props:**
- `setCurrentPage` - Navigation function

**Behavior:**
- On press: calls `setCurrentPage('home')`

---

### SoundIcon

**Purpose:** Tappable sound toggle icon.

**Props:**
- `volumeSetting` - Current setting
- `setVolumeSetting` - Toggle function

**Behavior:**
- Displays different icon based on volumeSetting
- On press: plays toggle sound, then toggles setting
- 'Mute Sound' state shows sound-on icon
- 'Unmute Sound' state shows sound-off icon

---

## Utilities

### Stack (`src/utils/Stack.js`)

Simple stack implementation for navigation. See Navigation System section.

### QuestionGenerator (`src/utils/QuestionGenerator.js`)

**Function:** `getRandomQuestion(topic)`

**Parameters:**
- `topic` - String matching available topics

**Returns:**
```javascript
{
  question: "Question text here?",
  answers: [
    "Correct Answer",           // Index 0 is always correct
    ["Answer A", "Answer B", "Answer C", "Answer D"]  // Shuffled options
  ]
}
```

**Behavior:**
- Loads questions from appropriate JSON file based on topic
- 'Any' topic pulls from all question pools
- Returns random question from pool
- Answer array index 0 is the correct answer
- Answer array index 1 is shuffled array of all 4 options

---

## Data Structure

### Question JSON Format

Questions are stored in JSON files within `src/data/questions/`.

```javascript
{
  "questions": [
    {
      "question": "Who built the ark?",
      "correct_answer": "Noah",
      "incorrect_answers": ["Moses", "Abraham", "David"]
    },
    // ... more questions
  ]
}
```

---

## Constants

### Images (`src/constants/images.js`)

Exports an object mapping image names to require() statements:

```javascript
export const images = {
  memoriaLogoLight: require('path/to/logo.png'),
  homeDark: require('path/to/home-icon.png'),
  soundIconOn: require('path/to/sound-on.png'),
  soundIconOff: require('path/to/sound-off.png'),
};
```

---

## Audio Files

Located in `assets/sounds/`:
- `correct-chime.wav` - Played on correct answer
- `incorrect-chime.wav` - Played on wrong answer
- `game-over.wav` - Played when Survival mode ends
- `volume-toggle.mp3` - Played when toggling sound setting

---

## State Flow Summary

```
App.js
├── pageStack (Stack) ─────────────► MainMenu routing
├── volumeSetting (String) ────────► TitleBar, Quiz, Settings, Freeplay
│
MainMenu
├── Renders based on pageStack.peek()
│
Freeplay
├── pageView (String) ─────────────► Internal routing
├── topic (String) ────────────────► Quiz
├── mode (String) ─────────────────► Quiz
│
Quiz
├── All game state (score, questions, timer, etc.)
├── Renders GameOver when viewGameOverScreen=true
│
GameOver
├── Receives final stats as props
├── setPageView('main') returns to Freeplay
```

---

## Key Behaviors to Preserve

1. **Volume Setting Naming:** The setting value is the ACTION the button will perform, not the current state. 'Mute Sound' means sound is currently ON (and pressing will mute it).

2. **Timer Precision:** Progress bar uses Animated.Value listener to detect timeout at ~1% remaining, not the animation completion callback.

3. **Score Calculation:** Time-based scoring rewards speed. Formula ensures minimum 500 points for any correct answer.

4. **Streak Tracking:** Current streak resets on wrong answer or timeout. Longest streak persists across the session.

5. **Question Handling:** Correct answer is always at index 0 of the answers array. Display uses shuffled array at index 1.

6. **Navigation Reset:** Going 'home' clears the entire stack and starts fresh, rather than popping back through history.
