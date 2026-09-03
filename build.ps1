[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $repoRoot

$sources = @(Get-ChildItem -LiteralPath $repoRoot -Filter '*.jemdoc' -File |
    Sort-Object -Property Name)
if ($sources.Count -eq 0) {
    throw "No .jemdoc source files found in $repoRoot"
}

& python (Join-Path $repoRoot 'jemdoc.py') '-c' 'mysite.conf' @($sources.Name)
if ($LASTEXITCODE -ne 0) {
    throw "jemdoc failed with exit code $LASTEXITCODE"
}

Write-Host ("Generated {0} HTML file(s)." -f $sources.Count)
