#!/bin/bash

echo "╔══════════════════════════════════════════════════════════╗"
echo "║     Verifying @google/genai Package Existence           ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

echo "Test 1: Check npm registry for @google/genai"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm view @google/genai 2>&1
echo ""

echo "Test 2: Check npm registry for @google/generative-ai"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm view @google/generative-ai name version 2>&1
echo ""

echo "Test 3: Try to install @google/genai"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm install @google/genai --dry-run 2>&1 | head -20
echo ""

echo "Test 4: Check what's in node_modules/@google/"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ls -la node_modules/@google/ 2>&1
echo ""

echo "Test 5: Search npm for 'google genai'"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm search "google genai" --json 2>&1 | head -50
echo ""
