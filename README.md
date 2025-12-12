# Wathiq MVP

A lightweight UI prototype built in **React Native (Expo)** for the “Wathiq” platform.

## Overview
Wathiq is a service marketplace concept that connects individuals with verified service companies and technicians.
This repository contains a **UI-only MVP** that demonstrates the main user journeys for a hackathon demo.

## App Flow
1. **Splash Screen**
   - Shows the Wathiq logo
   - Auto proceeds after a short delay

2. **Welcome Screen**
   - Individual login entry point
   - Company login entry point

3. **Individual User Flow**
   - Login (UI)
   - Home dashboard
   - Select service type
   - Select company
   - Select technician
   - Booking form
   - Booking confirmation

4. **Company Flow**
   - Company login (UI)
   - Company dashboard (basic stats)

## Tech Stack
- React Native
- Expo
- JavaScript

## Technical Note (Why no navigation libraries?)
This MVP uses a **state-based navigation approach** (no external routing dependencies).
This was chosen to keep the prototype:
- fast to run in Expo Snack / demo environments
- simple and dependency-free
- focused on UX flow validation rather than production routing

## Run Locally
1. Install dependencies:
   ```bash
   npm install
