# run-backend.ps1 — Starts Spring Boot with the correct JDK 17
$ErrorActionPreference = "Stop"

# Set JAVA_HOME to a known good JDK 17 install (no spaces in path)
$knownJdks = @(
    "C:\Program Files\Java\jdk-17",
    "C:\Program Files\Java\jdk-17.0.15.6-hotspot",
    "C:\Program Files\Eclipse Adoptium\jdk-17.0.16+8",
    "C:\Program Files\Microsoft\jdk-17.0.13.11-hotspot"
)

$foundJdk = $null
foreach ($path in $knownJdks) {
    if (Test-Path "$path\bin\java.exe") {
        $foundJdk = $path
        break
    }
}

if (-not $foundJdk) {
    # Fallback: scan C:\Program Files\Java for any jdk-17* without spaces in name
    $foundJdk = Get-ChildItem "C:\Program Files\Java" -Directory -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -like "jdk-17*" -and (Test-Path "$($_.FullName)\bin\java.exe") } |
        Select-Object -First 1 -ExpandProperty FullName
}

if (-not $foundJdk) {
    Write-Error "No valid JDK 17 found. Please install JDK 17 from https://adoptium.net"
    exit 1
}

$env:JAVA_HOME = $foundJdk
Write-Host "Using JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Green

$mavenVersion = "3.9.6"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$mavenDir = Join-Path $scriptDir ".mvn\maven-$mavenVersion"
$mvnExe = Join-Path $mavenDir "bin\mvn.cmd"

if (-not (Test-Path $mvnExe)) {
    Write-Host "Downloading Apache Maven $mavenVersion..." -ForegroundColor Yellow
    $url = "https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/$mavenVersion/apache-maven-$mavenVersion-bin.zip"
    $zipFile = Join-Path $env:TEMP "apache-maven-$mavenVersion-bin.zip"
    
    $wc = New-Object System.Net.WebClient
    $wc.DownloadFile($url, $zipFile)
    
    Write-Host "Extracting Maven..." -ForegroundColor Yellow
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::ExtractToDirectory($zipFile, (Join-Path $scriptDir ".mvn"))
    
    Rename-Item (Join-Path $scriptDir ".mvn\apache-maven-$mavenVersion") "maven-$mavenVersion" -Force
    Remove-Item $zipFile -Force
    Write-Host "Maven $mavenVersion is ready!" -ForegroundColor Green
}

Write-Host "Starting Murshid Spring Boot backend on port 8085..." -ForegroundColor Cyan 
Set-Location $scriptDir
& $mvnExe "spring-boot:run"
