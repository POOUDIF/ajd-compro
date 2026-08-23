# Logo Replacement Instructions

## Current Logo Status
The website currently uses a placeholder logo located at `/public/logo.png`.

## To Add Your Company Logo:

1. **Prepare your logo file:**
   - Format: PNG, JPG, or SVG recommended
   - Size: Minimum 150x150 pixels (for best quality)
   - Aspect ratio: Square or rectangular (1:1 or 16:9 recommended)
   - Background: Transparent (PNG) or white background

2. **Replace the logo file:**
   - Navigate to the `/public/` folder
   - Replace the existing `logo.png` file with your company logo
   - Keep the same filename `logo.png` OR update the filename in the code

3. **If using a different filename:**
   - Update the `src="/logo.png"` references in:
     - `app/page.tsx` (navbar section)
     - `app/page.tsx` (footer section)

4. **Recommended logo specifications:**
   - **Navbar logo:** 48x48px (will be displayed in a 48x48px container)
   - **Footer logo:** 48x48px (will be displayed in a 48x48px container)
   - **File size:** Under 100KB for optimal loading speed

## Logo Placement
The logo appears in two locations:
- **Header/Navbar:** Left side, next to "Ajisaka Jawa Dwipa" text
- **Footer:** Left side, next to company name

## Fallback Design
If the logo file is missing or fails to load, a stylized "AJD" text will appear instead with the company colors (#191970 and #B22222).