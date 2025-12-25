#!/bin/bash

# Generate PDF from HTML using Chrome/Chromium in headless mode
echo "Generating resume PDF..."

# Check if Chrome/Chromium is available
if command -v google-chrome &> /dev/null; then
    CHROME="google-chrome"
elif command -v chromium-browser &> /dev/null; then
    CHROME="chromium-browser"
elif command -v chromium &> /dev/null; then
    CHROME="chromium"
else
    echo "Error: Chrome/Chromium not found. Please install it."
    echo "Ubuntu/Debian: sudo apt install chromium-browser"
    exit 1
fi

# Generate PDF
$CHROME --headless --disable-gpu --print-to-pdf=public/resume.pdf --print-to-pdf-no-header public/resume-content.html

if [ -f "public/resume.pdf" ]; then
    echo "✅ Resume PDF generated successfully: public/resume.pdf"
    ls -lh public/resume.pdf
else
    echo "❌ Failed to generate PDF"
    exit 1
fi
