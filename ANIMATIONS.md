# 🎬 Animation Reference Guide

## Complete List of Animations & Effects

### 1️⃣ ENTRANCE ANIMATIONS (When page/elements load)

#### fadeInUp
- **Used on**: Headings, section titles, testimonials
- **Effect**: Content fades in while sliding up
- **Duration**: 0.8 seconds
- **Timing**: ease-out

#### slideInLeft
- **Used on**: Contact info, navigation items
- **Effect**: Slides in from left with fade
- **Duration**: 0.6 seconds
- **Timing**: ease-out

#### slideInRight
- **Used on**: Contact form
- **Effect**: Slides in from right with fade
- **Duration**: 0.8 seconds
- **Timing**: ease-out

---

### 2️⃣ SCROLL ANIMATIONS (Triggered on scroll)

#### Intersection Observer Animation
- **Triggers**: When card/element enters viewport
- **Elements**: All service cards, portfolio items, features
- **Effect**: Smooth fade-in with staggered delay
- **Delay**: 0.1s between each element
- **Performance**: GPU accelerated

---

### 3️⃣ HOVER ANIMATIONS (On mouse over)

#### Service Card Hover
```
Initial: Normal
On Hover: 
  - Lifts up (-12px transform)
  - Shadow grows (0 15px 40px)
  - Border appears (gold color)
  - Icon scales up and rotates
```
- **Duration**: 0.4 seconds
- **Timing**: cubic-bezier(0.34, 1.56, 0.64, 1)

#### Portfolio Item Hover
```
Initial: Normal
On Hover:
  - Image scales up (1.15x) with slight rotation
  - Overlay appears with gradient background
  - Title slides up
  - Brightness normalizes
```
- **Duration**: 0.5 seconds
- **Timing**: cubic-bezier (elastic effect)

#### Button Hover
```
Initial: Gold gradient
On Hover:
  - Changes to green gradient
  - Moves up (-3px)
  - Shadow increases
  - Text color changes
```
- **Duration**: 0.4 seconds

#### Feature Card Hover
```
Initial: Transparent background
On Hover:
  - Background becomes semi-transparent gold
  - Moves up (-5px)
  - Icon scales (1.2x) and rotates (-10deg)
  - Border glows with gold color
```

#### Testimonial Card Hover
```
Initial: Normal state
On Hover:
  - Moves up (-8px)
  - Shadow grows (15px spread)
  - Background slightly brightens
```

#### Navigation Link Hover
```
Initial: Text color #333
On Hover:
  - Text color changes to gold
  - Bottom border animates in (left to right)
  - Smooth underline effect
```

---

### 4️⃣ CONTINUOUS ANIMATIONS (Loop forever)

#### pulse
- **Used on**: Service icons
- **Effect**: Icons gently scale up and down
- **Loop**: Continuous, 2 seconds per cycle
- **Timing**: ease-in-out
- **Stops on**: Hover (replaced with scale/rotate)

#### float
- **Used on**: Hero section background pattern
- **Effect**: Subtle floating motion
- **Loop**: Continuous, 6 seconds per cycle
- **Timing**: ease-in-out
- **Range**: +/- 20px vertical

#### glow
- **Used on**: Contact form icons
- **Effect**: Box-shadow pulses (glow effect)
- **Loop**: Continuous, 3 seconds per cycle
- **Timing**: ease-in-out
- **Colors**: From subtle to bright gold

#### shimmer
- **Defined but not used**: Creates shimmer effect
- **Available for**: Future use on product cards

---

### 5️⃣ SPECIAL EFFECTS

#### Ripple Effect (Buttons)
```javascript
1. User clicks button
2. Circle appears at click point
3. Expands outward with fade
4. Disappears after 600ms
```
- **Duration**: 0.6 seconds
- **Opacity**: Fades from opaque to transparent
- **Size**: Grows from 0 to button size

#### Parallax Effect (Hero)
```javascript
1. As user scrolls down
2. Hero background moves slower
3. Creates depth illusion
4. Multiplier: 0.5x (moves 50% of scroll)
```

#### Scroll Progress Bar
```javascript
1. Fixed bar at top of page
2. Width increases as user scrolls
3. Real-time calculation
4. Shows percentage of page read
```

#### Form Success Animation
```
1. User submits form
2. Button text changes to "✓ Sent Successfully!"
3. Button background changes to green
4. After 2 seconds: Returns to normal
5. Form resets automatically
```

---

### 6️⃣ STAGGERED ANIMATIONS

#### Service Cards
- **First card**: Starts immediately
- **Second card**: 0.1s delay
- **Third card**: 0.2s delay
- **And so on...** +0.1s per card
- **Effect**: Cards appear in cascade

#### Portfolio Items
- Same staggered effect
- Creates sequential appearance
- Better visual flow

#### Features Section
- Grid staggered animation
- 0.1s delay between items
- Smooth, professional entrance

#### Testimonials
- Sequential appearance
- 0.1s between each
- Smooth reveal pattern

---

### 7️⃣ SECTION ANIMATIONS

#### Header Slide Down
- **On**: Page load
- **From**: Above viewport (-100%)
- **To**: Normal position
- **Duration**: 0.5 seconds

#### Section Opacity
- **Initial**: opacity: 0
- **On scroll into view**: opacity: 1
- **Smooth fade**: Throughout visibility

#### Title Animations
- **Before element**: Gradient line appears
- **Main text**: Fades in
- **After element**: Gradient underline
- **Multiple layers**: Complex visual effect

---

### 8️⃣ GRADIENT ANIMATIONS

#### Hero Background
- **Gradient**: Diagonal from dark green to gold
- **Direction**: 135deg
- **Opacity**: 0.85 - 0.95 for overlay

#### Button Gradient
- **Gold gradient**: #d4a574 to #e8b88f
- **On hover**: Changes to green gradient
- **Smooth transition**: 0.4 seconds

#### Text Gradient (Logo)
- **Background**: Green to gold gradient
- **Property**: -webkit-background-clip: text
- **Effect**: Gradient text color

#### Section Gradients
- **Why Choose Us**: Dark green gradient
- **Portfolio**: Light cream gradient
- **Contact**: Beige to white gradient

---

### 9️⃣ TIMING FUNCTIONS

#### Standard Timings Used
- **ease-out**: Initial animations, fast start
- **ease-in-out**: Continuous loops, balanced
- **cubic-bezier(0.34, 1.56, 0.64, 1)**: Elastic bounce effect

#### Animation Durations
- **Page Load**: 0.5 - 1.2 seconds
- **Hover**: 0.3 - 0.4 seconds
- **Scroll**: 0.4 - 0.5 seconds
- **Loops**: 2 - 6 seconds

---

### 🔟 PERFORMANCE NOTES

#### GPU Accelerated
- ✅ Transform (translate, scale, rotate)
- ✅ Opacity
- ✅ Box-shadow

#### CPU Intensive (Used Sparingly)
- ⚠️ Width/Height changes
- ⚠️ Position changes (top/left)
- ⚠️ Background images

#### Optimization Tips
- All animations use GPU-friendly properties
- Intersection Observer prevents off-screen animations
- Smooth 60fps performance maintained
- Mobile-optimized animation timings

---

## 🎨 Animation Showcase

### On Page Load
```
1. Header slides down (0.5s)
2. Hero content fades up in sequence:
   - Title (0.8s)
   - Subtitle (1s)
   - Buttons (1.2s + 0.4s)
3. Hero background pattern floats
```

### While Scrolling
```
1. Progress bar fills from 0-100%
2. Services appear in cascade as they enter viewport
3. Portfolio images scale smoothly on hover
4. Features section appears with staggered cards
5. Testimonials fade in as they become visible
```

### On Interaction
```
1. Navigation links underline on hover
2. Buttons lift up with shadow growth
3. Cards move up on hover
4. Icons pulse or rotate
5. Form submits with success animation
6. Ripple effects on button clicks
```

---

## 🎯 Total Animation Count

- **7 Keyframe Animations** (CSS)
- **8+ Interactive Effects** (JavaScript)
- **4+ Hover States** per element
- **3+ Scroll Effects** active
- **25+ Total Animation Combinations**

**Result**: Smooth, professional, engaging user experience! ✨

---

## 📝 Customizing Animations

### To Change Animation Speed
Find in `css/style.css`:
```css
animation: fadeInUp 0.8s ease-out;
/* Change 0.8s to faster (0.4s) or slower (1.5s) */
```

### To Add/Remove Animations
1. Open `js/script.js`
2. Find `observer.observe(el)`
3. Add/remove selector classes
4. Restart browser

### To Change Animation Direction
In `css/style.css`, modify keyframes:
```css
@keyframes fadeInUp {
    from { transform: translateY(40px); } /* Start position */
    to { transform: translateY(0); }      /* End position */
}
```

---

**Animation Reference Complete!** 🎬

All animations are smooth, professional, and optimized for performance.
