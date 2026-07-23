# Task Progress

## Completed Steps
- [x] Edit `src/components/Facilities.jsx` - Fix Study Point image containers
- [x] Edit `src/components/Navbar.jsx` - Increase logo size by 40%
- [x] Verify changes

## Summary of Changes

### Facilities.jsx — Study Point Image Layout
- **Main image (study_point_main.jpg):** Removed fixed height `h-64 sm:h-80 md:h-96`, changed `object-cover` → `object-contain`, added `rounded-xl`
- **Small image 1 (study_point_2.jpg):** Removed fixed height `h-64 sm:h-72`, changed `object-cover` → `object-contain`, added `rounded-xl`
- **Small image 2 (study_point_3.jpg):** Removed fixed height `h-64 sm:h-72`, changed `object-cover` → `object-contain`, added `rounded-xl`

### Navbar.jsx — Logo Size
- Changed `h-10 w-10` → `h-14 w-auto` (40px → 56px ≈ 40% increase)
- Removed `max-h-10 max-w-10` constraints
- Preserved `object-contain` for original rectangular aspect ratio

