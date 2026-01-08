# run-allure.ps1
# This script runs Playwright tests, generates Allure report, and opens it in the browser

# Path to Allure CLI libraries installed by Scoop
$allureLib = "C:\Users\saqlain\scoop\apps\allure\current\lib\*"

# # Run Playwright test with Allure reporter
# Write-Host "Running Playwright test..." -ForegroundColor Cyan
# npx playwright test tests/recruit.spec.js --reporter=allure-playwright --headed

# Generate Allure report
Write-Host "`nGenerating Allure report..." -ForegroundColor Cyan
java -cp "$allureLib" io.qameta.allure.CommandLine generate allure-results -o allure-report --clean

# Open Allure report in browser
Write-Host "`nOpening Allure report..." -ForegroundColor Cyan
java -cp "$allureLib" io.qameta.allure.CommandLine open allure-report
